document.addEventListener('DOMContentLoaded', () => {
    // Default location (London)
    const defaultLat = 51.505;
    const defaultLng = -0.09;
    const defaultZoom = 13;

    // Initialize map
    const map = L.map('map').setView([defaultLat, defaultLng], defaultZoom);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Initialize marker
    let marker = L.marker([defaultLat, defaultLng]).addTo(map);
    marker.bindPopup("<b>Welcome!</b><br>Start by entering coordinates.").openPopup();

    // Elements
    const latInput = document.getElementById('latitude');
    const lngInput = document.getElementById('longitude');
    const locateBtn = document.getElementById('locate-btn');
    const errorMsg = document.getElementById('error-message');

    // Function to update map location
    function updateLocation() {
        const lat = parseFloat(latInput.value);
        const lng = parseFloat(lngInput.value);

        // Reset error
        errorMsg.classList.add('hidden');
        errorMsg.textContent = '';

        // Validation
        if (isNaN(lat) || isNaN(lng)) {
            showError("Please enter valid numerical values for both Latitude and Longitude.");
            return;
        }

        if (lat < -90 || lat > 90) {
            showError("Latitude must be between -90 and 90.");
            return;
        }

        if (lng < -180 || lng > 180) {
            showError("Longitude must be between -180 and 180.");
            return;
        }

        // Update Map
        map.setView([lat, lng], 13);
        marker.setLatLng([lat, lng]);
        marker.bindPopup(`<b>Location Found</b><br>Lat: ${lat}<br>Lng: ${lng}`).openPopup();
    }

    // Helper to show error
    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
    }

    // Event Listeners
    locateBtn.addEventListener('click', updateLocation);

    // Allow "Enter" key to trigger search
    latInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') updateLocation();
    });
    lngInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') updateLocation();
    });

    // Optional: Update on input change (dynamic) - per requirements "Update the displayed location dynamically when inputs change"
    // However, for better UX (avoiding jumping map while typing), maybe wait for valid full input or debounce.
    // The requirement says "Update the displayed location dynamically when inputs change".
    // Let's add a debounced listener or just simple change listener if the user prefers immediate feedback.
    // Given "Update the displayed location dynamically when inputs change", I will add 'change' event which fires on blur/enter, 
    // and maybe 'input' with debounce if I wanted to be fancy, but 'change' or button click is safer for coordinates.
    // Let's stick to the button for primary action to avoid erratic jumping, but I'll add 'change' listener as well for the "dynamic" requirement.
    
    // Actually, let's just use the button as the primary trigger to prevent bad UX, 
    // but if the requirement is strict about "dynamically", I can add it. 
    // I'll stick to the button + Enter key for now as it's the standard "form submission" behavior which is robust. 
    // If I strictly follow "dynamically when inputs change", I'd use the 'input' event. 
    // Let's add 'change' event which triggers on blur/enter.
    
    latInput.addEventListener('change', () => {
        if(latInput.value && lngInput.value) updateLocation();
    });
    lngInput.addEventListener('change', () => {
        if(latInput.value && lngInput.value) updateLocation();
    });
});
