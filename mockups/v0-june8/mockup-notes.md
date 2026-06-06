# Notes about the first mockup version for June 8 meeting

# Hornet Occurrence Map — Mockup Instructions

## Running the mockup locally

The map fetches data from external APIs (GBIF, OpenStreetMap, GitHub), so it must be served over HTTP — opening the HTML file directly by double-clicking it will cause a CORS error and the map will not load. You need to run a simple local server instead. The easiest way is with Python, which comes pre-installed on Mac and Linux.

---

### Step 1 — Check that Python is installed

**Mac / Linux:** Open the Terminal application. On Mac you can find it by pressing `Cmd + Space` and typing "Terminal".

**Windows:** Open the Start menu and search for "Command Prompt" or "PowerShell".

Type the following and press Enter:

```bash
python --version
```

You should see something like `Python 3.11.2`. If you see `command not found` or an error, download and install Python from [python.org](https://www.python.org/downloads/) and then restart your terminal.

---

### Step 2 — Navigate to the project folder

You need to tell the terminal where your project files are. Type `cd` followed by a space, then the path to the folder.

**The easiest way** is to type `cd ` (with a space after it) and then drag the project folder from Finder (Mac) or File Explorer (Windows) directly into the terminal window. It will fill in the path automatically. Then press Enter.

```bash
cd path/to/your/project
```

You can verify you are in the right place by typing `ls` (Mac/Linux) or `dir` (Windows) and pressing Enter — you should see `index.html` listed.

---

### Step 3 — Start the server

Type the following and press Enter:

```bash
python -m http.server 8000
```

You should see: `Serving HTTP on 0.0.0.0 port 8000`. The terminal will appear to hang — that is normal, it means the server is running.

---

### Step 4 — Open the map

Open any web browser and go to:

```
http://localhost:8000/index.html
```

The map should load. Data will take 15–30 seconds to appear as it fetches from GBIF.

---

### Step 5 — Stopping the server

When you are done, go back to the terminal and press `Ctrl + C`. This stops the server.

---

## Known caveats

### Data

- **Loading time is slow.** The map makes one GBIF API request per year per species (25 years × 2 species = 50 requests on startup). Expect 15–30 seconds before all points appear. Prefetching data points or returning an aggregated result may be desirable in the future. Also depends on the representation and design choices we will go for in the future.  
- **live GBIF loading is demo behavior** not production behavior. In a production environment we will aim for a different solution. that has preloaded data ready and updates on an hourly/daily/weekly basis (still needs to be determined)
- **GBIF caps results at 300 per request.** Each year/species combination returns at most 300 records. This is done for demonstration puropses and should be solved differently in a produciton evnironment. This means that **not all data is being loaded**. High-density years are therefore underrepresented.
- **`stateProvince` is rarely populated** in GBIF records. State counts in the hover panel will be an undercount for records where this field is missing. Markers that appear on the map may not appear in the accumulated state count. A derived value based on coordinates and the federal state bounderies may work better in a future verison. This should ideally be calculated on the server-side, since it would otherwise increase loading times by a lot.   
- **Taxon keys used:**
  - *Vespa velutina* (Asian hornet) → `1311477`
  - *Vespa crabro* (European hornet) → `1311527`
- Data is filtered to Germany (`country=DE`) and records with coordinates only (`hasCoordinate=true`).
- Year range is currently **2000–2024**.
- The available timeframes for hornet sightings are currently year based, meaning we can select either a specific year from the year range or all sightings from the year range. This is still part of the demo version and it has not yet been decided whether this is the final representation that we want/need. 
- The visualization is only showing asian hornet and european hornet sightings, not nest sightings. Is it possible to get nest sighting data from GBIF?

### Map

- **Federal state boundaries** are loaded from a third-party GitHub repository ([isellsoap/deutschlandGeoJSON](https://github.com/isellsoap/deutschlandGeoJSON)) using the low-resolution (`4_niedrig`) file. Boundaries may not be pixel-perfect at high zoom levels.
- **State hover counts** reflect all loaded markers regardless of the current species/year filter selection. They do not update dynamically when filters change.
- The **year filter** only hides/shows already-loaded markers — it does not re-fetch data. All years are loaded on startup.
- The map is **not mobile optimised**. Controls and the info panel may overlap on small screens.
- Moving around on the map is already laggy on my testing setup and will only increase with more (all production) data points. 

### Representation

- Each occurrence record is shown as an individual dot on the map, so areas with many sightings appear as dense overlapping clusters
- Vespa Valutina (Asian Hornet) is drawn on the map first and Vespa Crabro (European Hornet) is drawn second. This makes it hard to make out where the asian hornet occurences are.   
- Generally the visualization serves as a first discussion point and is not a final design. There are many ways to represent this kind of geographical data on a map and there needs to be a discussion on what we actually want to communicate and how to do that.   

### Browser

- Tested in Firefox. Safari or Chrome may behave differently with the fetch calls.- Moving around on the ma
- All data is held in memory. Refreshing the page triggers a full reload of all API requests.

## AI usage

AI was used to support the creation of the code files and the mockup-notes.md file.