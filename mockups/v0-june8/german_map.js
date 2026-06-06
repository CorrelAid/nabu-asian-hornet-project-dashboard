var map = L.map('map').setView([51.0967, 10.3475], 7);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const GBIF_API = 'https://api.gbif.org/v1/occurrence/search';
const SPECIES = [
  { name: 'Vespa velutina (Asian hornet)', taxonKey: 1311477, color: '#e67e00' },
  { name: 'Vespa crabro (European hornet)', taxonKey: 1311527, color: '#c0392b' },
];

async function loadStates() {
  const res = await fetch('https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json');
  const data = await res.json();

  L.geoJSON(data, {
    style: { color: '#333', weight: 1, fillOpacity: 0 },
    onEachFeature: function (feature, layer) {
      layer.on({
        mouseover: function (e) {
          e.target.setStyle({ fillColor: '#666', fillOpacity: 0.2, weight: 2 });
          showStateInfo(feature.properties);
        },
        mouseout: function (e) {
          e.target.setStyle({ fillOpacity: 0, weight: 1 });
          hideStateInfo();
        },
      });
    },
  }).addTo(map);
}

loadStates().catch(err => console.error('Failed to load state boundaries:', err));


// All markers stored with metadata for filtering
const allMarkers = []; // { marker, taxonKey, year }
const displayLayer = L.layerGroup().addTo(map);

let activeSpecies = 'all';
let activeYear = 'all';

async function fetchOccurrences(taxonKey, yearStart = 2000, yearEnd = 2024) {
  const allResults = [];

  for (let year = yearStart; year <= yearEnd; year++) {
    const url = `${GBIF_API}?taxonKey=${taxonKey}&country=DE&hasCoordinate=true&year=${year},${year}&limit=300&offset=0`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.results?.length) {
      allResults.push(...data.results);
    }
  }

  return allResults;
}

function makeCircle(lat, lng, color, label) {
  return L.circleMarker([lat, lng], {
    radius: 5, color, fillColor: color, fillOpacity: 0.6, weight: 1,
  }).bindPopup(label);
}

function applyFilters() {
  displayLayer.clearLayers();
  for (const { marker, taxonKey, year } of allMarkers) {
    const speciesMatch = activeSpecies === 'all' || activeSpecies === String(taxonKey);
    const yearMatch = activeYear === 'all' || activeYear === String(year);
    if (speciesMatch && yearMatch) displayLayer.addLayer(marker);
  }
}

const stateCounts = {}; // { stateName: { taxonKey: count } }

async function loadAll() {
  const statusEl = document.getElementById('status');
  const countEl = document.getElementById('count');
  let total = 0;

  for (const sp of SPECIES) {
    statusEl.textContent = `Loading ${sp.name}…`;
    const records = await fetchOccurrences(sp.taxonKey);

    console.log(records);
    for (const r of records) {
      if (r.decimalLatitude && r.decimalLongitude) {
        const popup = `<b>${sp.name}</b><br>${r.stateProvince || ''}DE<br>${r.year || 'year unknown'}`;
        const marker = makeCircle(r.decimalLatitude, r.decimalLongitude, sp.color, popup);
        allMarkers.push({ marker, taxonKey: sp.taxonKey, year: r.year });

        if (r.stateProvince) {
          if (!stateCounts[r.stateProvince]) {
            stateCounts[r.stateProvince] = {};
            for (const s of SPECIES) stateCounts[r.stateProvince][s.taxonKey] = 0;
          }
          stateCounts[r.stateProvince][sp.taxonKey]++;
        }

        total++;
      }
    }
    countEl.textContent += `${sp.name}: ${records.length} loaded\n`;
  }

  applyFilters(); // initial render
  statusEl.textContent = `${total} occurrences loaded`;
  setTimeout(() => statusEl.style.display = 'none', 3000);

}

// Species control
const speciesControl = L.control({ position: 'topright' });
speciesControl.onAdd = function () {
  const div = L.DomUtil.create('div');
  div.innerHTML = `<select id="species-select">
    <option value="all">All</option>
    <option value="1311477">Vespa velutina</option>
    <option value="1311527">Vespa crabro</option>
  </select>`;
  L.DomEvent.disableClickPropagation(div);
  div.querySelector('select').addEventListener('change', function () {
    activeSpecies = this.value;
    applyFilters();
  });
  return div;
};
speciesControl.addTo(map);

// Year control — build options 2000–2024
const yearControl = L.control({ position: 'topright' });
yearControl.onAdd = function () {
  const div = L.DomUtil.create('div');
  let options = '<option value="all">All years</option>';
  for (let y = 2024; y >= 2000; y--) {
    options += `<option value="${y}">${y}</option>`;
  }
  div.innerHTML = `<select id="year-select">${options}</select>`;
  L.DomEvent.disableClickPropagation(div);
  div.querySelector('select').addEventListener('change', function () {
    activeYear = this.value;
    applyFilters();
  });
  return div;
};
yearControl.addTo(map);

const legendControl = L.control({ position: 'bottomright' });
legendControl.onAdd = function () {
  const div = L.DomUtil.create('div');
  div.style.background = 'white';
  div.style.padding = '8px 12px';
  div.style.lineHeight = '1.8';
  div.style.fontSize = '13px';

  div.innerHTML = SPECIES.map(sp => `
    <div>
      <span style="
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${sp.color};
        margin-right: 6px;
        vertical-align: middle;
      "></span>
      <i>${sp.name}</i>
    </div>
  `).join('');

  L.DomEvent.disableClickPropagation(div);
  return div;
};
legendControl.addTo(map);

// Info panel control
const infoControl = L.control({ position: 'topright' });
infoControl.onAdd = function () {
  const div = L.DomUtil.create('div');
  div.id = 'state-info';
  div.style.display = 'none';
  div.style.background = 'white';
  div.style.padding = '8px 12px';
  div.style.fontSize = '13px';
  div.style.lineHeight = '1.6';
  div.style.minWidth = '200px'; // Should this be responsive?
  return div;
};
infoControl.addTo(map);

/* function showStateInfo(props) {
  const div = document.getElementById('state-info');
  div.style.display = 'block';
  div.innerHTML = `<b>${props.NAME_1 || props.name}</b>`;
} */

function showStateInfo(props) {
  const name = props.name;
  const counts = stateCounts[name] || {};

  const rows = SPECIES.map(sp => {
    const n = counts[sp.taxonKey] ?? 0;
    return `
      <tr>
        <td style="padding: 2px 12px 2px 0; white-space: nowrap;">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;
            background:${sp.color};margin-right:5px;vertical-align:middle;"></span>
          ${sp.name}
        </td>
        <td style="padding: 2px 0; text-align: right; font-weight: bold;">${n}</td>
      </tr>`;
  }).join('');

  document.getElementById('state-info').style.display = 'block';
  document.getElementById('state-info').innerHTML = `
    <b style="display:block; margin-bottom: 6px;">${name}</b>
    <table style="width: 100%; border-collapse: collapse;">
      ${rows}
    </table>`;
}

function hideStateInfo() {
  document.getElementById('state-info').style.display = 'none';
}

map.attributionControl.addAttribution('Occurrence data: <a href="https://www.gbif.org" target="_blank">NABU/Naturgucker via GBIF</a>');

loadAll().catch(err => {
  document.getElementById('status').textContent = 'Error: ' + err.message;
});
