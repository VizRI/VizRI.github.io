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
        fillOpacity: 0.5,
        weight: 2,
        color: getColor(feature.properties.seconds),
        opacity: 0.1
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

L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    minZoom: 10,
}).addTo(map);

addGeoJson("http://127.0.0.1:8000/data/rhode_island.geojson", RiStyle);
addGeoJson("http://127.0.0.1:8000/data/seconds_900.geojson", PolyStyle);
addGeoJson("http://127.0.0.1:8000/data/seconds_600.geojson", PolyStyle);
addGeoJson("http://127.0.0.1:8000/data/seconds_300.geojson", PolyStyle);
addGeoJson("http://127.0.0.1:8000/data/seconds_150.geojson", PolyStyle);
