// mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyaWR1bGhhc3NhbiIsImEiOiJjanc2MnplOGIxdGk5NGFwc3Y4aWJhamx1In0.XAbuzp8kJs5Xkfw0qWflgw';
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyaWR1bGhhc3NhbiIsImEiOiJjanc2Mmh3aXkxem44NGFxcXVvdDMwM3RxIn0.COGqJz_WLoSOK7pMTXOA_w';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-101.803234, 39.773638],
    zoom: 8,
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
});

// Controls
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());
// map.scrollZoom.disable();


// Data
const usaData = [
    {
        city: "New York City",
        state: "New York",
        population: 8336697,
        lat: 40.7128,
        lng: -74.0059,
        timezone: "Eastern Time Zone",
        elevation: 10,
        area: 468.9,
        nickname: "The Big Apple"
    },
    {
        city: "Los Angeles",
        state: "California",
        population: 3979576,
        lat: 34.0522,
        lng: -118.2437,
        timezone: "Pacific Time Zone",
        elevation: 71,
        area: 1302,
        nickname: "City of Angels"
    },
    {
        city: "Chicago",
        state: "Illinois",
        population: 2695598,
        lat: 41.8819,
        lng: -87.6231,
        timezone: "Central Time Zone",
        elevation: 181,
        area: 606.1,
        nickname: "The Windy City"
    },
    {
        city: "Houston",
        state: "Texas",
        population: 2320268,
        lat: 29.7604,
        lng: -95.3698,
        timezone: "Central Time Zone",
        elevation: 30,
        area: 671.2,
        nickname: "Space City"
    },
    {
        city: "Phoenix",
        state: "Arizona",
        population: 1680992,
        lat: 33.4484,
        lng: -112.0740,
        timezone: "Mountain Time Zone",
        elevation: 331,
        area: 517.6,
        nickname: "Valley of the Sun"
    },
    {
        city: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064,
        lat: 39.9526,
        lng: -75.1652,
        timezone: "Eastern Time Zone",
        elevation: 40,
        area: 141.6,
        nickname: "City of Brotherly Love"
    },
    {
        city: "San Antonio",
        state: "Texas",
        population: 1547253,
        lat: 29.4241,
        lng: -98.4936,
        timezone: "Central Time Zone",
        elevation: 200,
        area: 461.0,
        nickname: "Alamo City"
    },
    {
        city: "San Diego",
        state: "California",
        population: 1423851,
        lat: 32.7157,
        lng: -117.1611,
        timezone: "Pacific Time Zone",
        elevation: 66,
        area: 372.4,
        nickname: "America's Finest City"
    },
    {
        city: "Dallas",
        state: "Texas",
        population: 1343573,
        lat: 32.7767,
        lng: -96.7970,
        timezone: "Central Time Zone",
        elevation: 131,
        area: 385.8,
        nickname: "Big D"
    },
    {
        city: "San Jose",
        state: "California",
        population: 1035317,
        lat: 37.3382,
        lng: -121.8863,
        timezone: "Pacific Time Zone",
        elevation: 25,
        area: 177.5,
        nickname: "Capital of Silicon Valley"
    },
    {
        city: "Austin",
        state: "Texas",
        population: 964254,
        lat: 30.2672,
        lng: -97.7431,
        timezone: "Central Time Zone",
        elevation: 149,
        area: 313.9,
        nickname: "Live Music Capital of the World"
    },
    {
        city: "Jacksonville",
        state: "Florida",
        population: 903889,
        lat: 30.3322,
        lng: -81.6557,
        timezone: "Eastern Time Zone",
        elevation: 5,
        area: 747.4,
        nickname: "Jax"
    },
    {
        city: "Fort Worth",
        state: "Texas",
        population: 895008,
        lat: 32.7555,
        lng: -97.3308,
        timezone: "Central Time Zone",
        elevation: 198,
        area: 342.9,
        nickname: "Cowtown"
    },
    {
        city: "Columbus",
        state: "Ohio",
        population: 892533,
        lat: 39.9612,
        lng: -82.9988,
        timezone: "Eastern Time Zone",
        elevation: 265,
        area: 223.1,
        nickname: "Arch City"
    },
    {
        city: "San Francisco",
        state: "California",
        population: 883305,
        lat: 37.7749,
        lng: -122.4194,
        timezone: "Pacific Time Zone",
        elevation: 16,
        area: 231.9,
        nickname: "City by the Bay"
    },
    {
        city: "Charlotte",
        state: "North Carolina",
        population: 872498,
        lat: 35.2271,
        lng: -80.8431,
        timezone: "Eastern Time Zone",
        elevation: 229,
        area: 305.4,
        nickname: "The Queen City"
    },
    {
        city: "Indianapolis",
        state: "Indiana",
        population: 867125,
        lat: 39.7684,
        lng: -86.1581,
        timezone: "Eastern Time Zone",
        elevation: 215,
        area: 368.2,
        nickname: "Indy"
    },
    {
        city: "Seattle",
        state: "Washington",
        population: 744955,
        lat: 47.6062,
        lng: -122.3321,
        timezone: "Pacific Time Zone",
        elevation: 57,
        area: 142.5,
        nickname: "Emerald City"
    },
    {
        city: "Denver",
        state: "Colorado",
        population: 716492,
        lat: 39.7392,
        lng: -104.9903,
        timezone: "Mountain Time Zone",
        elevation: 1610,
        area: 155.0,
        nickname: "Mile High City"
    },
    {
        city: "Washington",
        state: "District of Columbia",
        population: 702455,
        lat: 38.9072,
        lng: -77.0369,
        timezone: "Eastern Time Zone",
        elevation: 23,
        area: 68.34,
        nickname: "The District"
    }
];

// Bounds
const bounds = new mapboxgl.LngLatBounds();



// Markers
const markers = [];
usaData.forEach((city, index) => {
    var el = document.createElement('div');
    el.id = `marker_${index}`;

    const popup = new mapboxgl.Popup({ offset: 30 });

    // Format the popup content with HTML tags
    const popupContent = `<h3>${city.city}</h3>
  <p><b>Nickname:</b> ${city.nickname}</p>
  <p><b>State:</b> ${city.state}</p>
  <p><b>Population:</b> ${city.population.toLocaleString()}</p>`;

    popup.setHTML(popupContent);


    const marker = new mapboxgl.Marker({
        color: 'red'
    })
        .setLngLat([city.lng, city.lat])
        .setPopup(popup)
        .addTo(map);

    markers.push(marker);

    marker.getElement().addEventListener('click', function(e) {
        map.flyTo({
            duration: 400,
            center: marker.getLngLat(),
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
            // zoom: 10
        })
    })

    bounds.extend([city.lng, city.lat]);
});


map.fitBounds(bounds, { padding: 100 });



