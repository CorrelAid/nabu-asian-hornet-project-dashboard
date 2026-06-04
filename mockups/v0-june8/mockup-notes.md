# Notes about the first mockup version for June 8 meeting

## Running the mockup locally

The map fetches data from external APIs (GBIF, OpenStreetMap, GitHub), so it must be served over HTTP — opening the HTML file directly via `file://` will cause CORS errors.

**Start a local server with Python:**

```bash
# Navigate to the project folder
cd path/to/your/project

# Python 3
python -m http.server 8000
```

Then open your browser at:

```
http://localhost:8000/index.html
```

---

## Known caveats

### Data

- **Loading time is slow.** The map makes one GBIF API request per year per species (25 years × 2 species = 50 requests on startup). Expect 15–30 seconds before all points appear. Prefetching data points or returning an aggregated result may be desirable in the future. Also depends on the representation and design choices we will go for in the future.  
- **GBIF caps results at 300 per request.** Each year/species combination returns at most 300 records. High-density years are therefore underrepresented.
- **`stateProvince` is rarely populated** in GBIF records. State counts in the hover panel will be an undercount for records where this field is missing. Markers that appear on the map may not appear in the accumulated state count. A derived value based on coordinates and the federal state bounderies may work better in a future verison. This should ideally be calculated on the server-side, since it would otherwise increase loading times by a lot.   
- **Taxon keys used:**
  - *Vespa velutina* (Asian hornet) → `1311477`
  - *Vespa crabro* (European hornet) → `1311527`
- Data is filtered to Germany (`country=DE`) and records with coordinates only (`hasCoordinate=true`).
- Year range is currently **2000–2024**.

### Map

- **Federal state boundaries** are loaded from a third-party GitHub repository ([isellsoap/deutschlandGeoJSON](https://github.com/isellsoap/deutschlandGeoJSON)) using the low-resolution (`4_niedrig`) file. Boundaries may not be pixel-perfect at high zoom levels.
- **State hover counts** reflect all loaded markers regardless of the current species/year filter selection. They do not update dynamically when filters change.
- The **year filter** only hides/shows already-loaded markers — it does not re-fetch data. All years are loaded on startup.
- The map is **not mobile optimised**. Controls and the info panel may overlap on small screens.

### Browser

- Tested in Firefox. Safari or Chrome may behave differently with the fetch calls.
- All data is held in memory. Refreshing the page triggers a full reload of all API requests.