//Add google map
let map;

function initMap() {
    const myLatLng = { lat: 40.74434276419618, lng: -73.9261395241616 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 17,
    });
    //add marker
    let marker = new google.maps.Marker({
        position: myLatLng,
        //on which map to place the marker
        map: map,
        title: "Company",
    });
}