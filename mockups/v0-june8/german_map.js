var map = L.map('map').setView([51.0967, 10.3475], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const GBIF_API = 'https://api.gbif.org/v1/occurrence/search';

const SPECIES = [
  { name: 'Vespa velutina', taxonKey: 1311477, color: '#e67e00' },
  { name: 'Vespa crabro', taxonKey: 1311527, color: '#c0392b' },
];

async function fetchOccurrences(taxonKey, yearStart = 2015, yearEnd = 2024, maxRecords = 3000) {
  const limit = 300;
  let offset = 0;
  let allResults = [];

  while (offset < maxRecords) {
    const url = `${GBIF_API}?taxonKey=${taxonKey}&country=DE&hasCoordinate=true&year=${yearStart},${yearEnd}&limit=${limit}&offset=${offset}`;
    const res  = await fetch(url);
    const data = await res.json();
    const batch = data.results;

    if (!batch || batch.length === 0) break;
    allResults = allResults.concat(batch);

    if (offset + limit >= data.count) break;
    offset += limit;
  }

  return allResults;
}

function makeCircle(lat, lng, color, label) {
  return L.circleMarker([lat, lng], {
    radius: 5,
    color: color,
    fillColor: color,
    fillOpacity: 0.6,
    weight: 1,
  }).bindPopup(label);
}

// Store markers per species key
const layerGroups = {};

async function loadAll() {
  const statusEl = document.getElementById('status');
  const countEl = document.getElementById('count');
  let total = 0;

  for (const sp of SPECIES) {
    const group = L.layerGroup().addTo(map);  // added to map by default
    layerGroups[sp.taxonKey] = group;

    statusEl.textContent = `Loading ${sp.name}…`;
    const records = await fetchOccurrences(sp.taxonKey);
    let speciesTotal = 0;

    for (const r of records) {
      if (r.decimalLatitude && r.decimalLongitude) {
        const popup = `<b>${sp.name}</b><br>${r.stateProvince || ''}${r.stateProvince ? ', ' : ''}DE<br>${r.year || 'year unknown'}`;
        makeCircle(r.decimalLatitude, r.decimalLongitude, sp.color, popup).addTo(group);
        speciesTotal++;
        total++;
      }
    }

    countEl.textContent += `${speciesTotal} occurrences of ${sp.name} loaded\n`;
  }

  statusEl.textContent = `${total} occurrences loaded`;
  setTimeout(() => statusEl.style.display = 'none', 3000);
}

const selectControl = L.control({ position: 'topright' });
selectControl.onAdd = function () {
  const div = L.DomUtil.create('div');
  div.innerHTML = `<select id="species-select">
    <option value="all">Both species</option>
    <option value="1311477">Vespa velutina</option>
    <option value="1311527">Vespa crabro</option>
  </select>`;
  L.DomEvent.disableClickPropagation(div);

  div.querySelector('select').addEventListener('change', function () {
    const val = this.value;
    for (const sp of SPECIES) {
      const group = layerGroups[sp.taxonKey];
      if (!group) continue;
      if (val === 'all' || val === String(sp.taxonKey)) {
        map.addLayer(group);
      } else {
        map.removeLayer(group);
      }
    }
  });

  return div;
};
selectControl.addTo(map);

loadAll().catch(err => {
  document.getElementById('status').textContent = 'Error: ' + err.message;
});
