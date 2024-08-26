<!-- src/components/LeafletMap.vue -->
<template>
    <button @click="resetMap" class="bg-red-600 py-2 px-3 rounded-md text-white">Reset Map</button>
    <div id="map" class="h-[500px] w-full"></div>
  </template>
  
  <script>
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  
  export default {
    name: "LeafletMap",
    data() {
        return {
            latitude: 10.325438,
            longitude: 123.9174312,
            map: null,
            marker: null,
        }
    },
    mounted() {
        this.navigateMap()
    },
    methods: {
        navigateMap(reset = false) {
            this.latitude = 10.325438
            this.longitude = 123.9174312

            if (reset && this.map) {
                this.map.setView([this.latitude, this.longitude], 13)
                return
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // On success, set location data
                        this.latitude = position.coords.latitude
                        this.longitude = position.coords.longitude

                        this.setMapView(position.coords.longitude, position.coords.latitude)
                    },
                    (err) => {
                        // On error, set the error message
                        
                        this.setMapView(this.longitude, this.latitude)
                    }
                );
            }
        },
        setMapView(long = this.longitude, lat = this.latitude, zoom = 13) {
            // Initialize the map
            this.map = L.map("map").setView([lat, long], zoom);
        
            // Set up the OpenStreetMap tile layer
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
            }).addTo(this.map);
        
            // Optional: Add a marker
            L.marker([lat, long])
                .addTo(this.map)
                .bindPopup("Your current location.")
                .openPopup();
            
            this.map.on('click', this.onMapClick)
        },
        async onMapClick(e) {
            const { lat, lng } = e.latlng;
            this.latitude = lat
            this.longitude = lng
             // Remove the existing marker if it exists
            if (this.marker) {
                this.marker.remove();  // More specific method to remove the marker from the map
            }

            // If a marker already exists, remove it
            if (this.marker) {
                this.map.removeLayer(this.marker);
            }

            // Create a new marker at the clicked location
            this.marker = L.marker([lat, lng]).addTo(this.map);
            
            let place = await this.reverseGeocode(lat, lng)
            console.log(place)
            // Add a popup to the marker displaying the latitude and longitude
            this.marker.bindPopup(`Selected: ${place}`).openPopup();
        },
        async reverseGeocode(lat, lng) {
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(['data', data])
                this.$emit('selected-location', data)
                return data.display_name
            } catch (error) {
                this.$emit('selected-location', null)
                return ''
            }
        },
        resetMap(e) {
            e.preventDefault();
            this.navigateMap(true)
        }
    }
};
</script>
  