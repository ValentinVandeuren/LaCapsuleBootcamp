var mymap = L.map('worldmap',
{
 center: [50.850340, 4.351710],
 zoom: 8
}
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

let coord = document.getElementsByClassName('cityName');

for(let i=0; i <coord.length; i++){
    let lat = coord[i].dataset.lat;
    let lon = coord[i].dataset.lon;
    let cityName = coord[i].textContent;
    
    L.marker([lat, lon]).addTo(mymap).bindPopup(cityName);
};