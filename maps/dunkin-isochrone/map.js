function RiStyle(feature) {
    return {
        fillColor: '#ffffff',
        weight: 2,
        opacity: 1,
        color: '#666666',
        dashArray: '3',
        fillOpacity: 0
    };
}

function getColor(d) {
    return d == 150 ? '#EA872C' :
           d == 300 ? '#EB9C50' :
           d == 600 ? '#ECB177' :
           d == 900 ? '#EEC69F' :
                      '#FFFFFF' ;
}

function PolyStyle(feature) {
    return {
        fillColor: getColor(feature.properties.seconds),
        fillOpacity: 0.8,
        weight: 2,
        color: getColor(feature.properties.seconds),
        opacity: 0.2
    };
}

async function addGeoJson(fileName, styleName) {
    const response = await fetch(fileName);
    const data = await response.json();
    L.geoJson(data, {style: styleName}).addTo(map);
}

var southWest = L.latLng(41.099222, -72.001916),
    northEast = L.latLng(42.093533, -70.973496),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map')
    .setView([41.78682, -71.2858], 10)
    .setMaxBounds(bounds);

mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';



addGeoJson("http://127.0.0.1:8000/data/rhode_island.geojson", RiStyle);
addGeoJson("http://127.0.0.1:8000/data/dunkin_distance.geojson", PolyStyle);

var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [150, 300, 600, 900],
        labels = ['2.5 mins', '5 mins', '10 mins', '15 mins'];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);