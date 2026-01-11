Location Mapping Application
A simple, aesthetic web-based application that accepts latitude and longitude inputs and displays the corresponding geographic location on an interactive map.

🚀 Live Demo
(You can deploy this to GitHub Pages, Netlify, or Vercel)

🛠️ Tools & Libraries Used
HTML5: For the semantic structure of the web page.
CSS3: For styling, using CSS Variables and Flexbox for a responsive, premium design.
JavaScript (ES6+): For application logic and event handling.
Leaflet.js: A leading open-source JavaScript library for mobile-friendly interactive maps.
OpenStreetMap: Used as the tile provider for the map data.
Google Fonts: Used 'Inter' font for modern typography.
🧠 Logic Explanation
1. Input Capture
The application uses two HTML input fields (<input type="number">) to capture the Latitude and Longitude from the user.

2. Map Initialization
On page load, a Leaflet map is initialized centered on a default location (London).
A tile layer from OpenStreetMap is added to the map to render the visual map tiles.
A default marker is placed at the center.
3. Processing Coordinates
When the user clicks the "Find Location" button or presses "Enter":

The JavaScript reads the values from the input fields.
Validation: It checks if the inputs are numbers and if they fall within valid ranges (Lat: -90 to 90, Lng: -180 to 180).
If invalid, an error message is displayed.
4. Updating the Map
If the coordinates are valid:

map.setView([lat, lng], zoomLevel) is called to center the map on the new coordinates.
marker.setLatLng([lat, lng]) moves the marker to the exact spot.
A popup is bound to the marker displaying the current coordinates.
📂 File Structure
index.html: Main entry point.
style.css: Stylesheet.
script.js: Application logic.
🏃‍♂️ How to Run Locally
Clone or download this repository.
Open index.html in any modern web browser.
Enjoy exploring!# location-mapper
