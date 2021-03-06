/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected
//COMPLETE
/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]
// mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.4916, 29.4252],
// });


//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)
// mapboxgl.accessToken = mapboxToken;
// var mapOptions = {
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.4916, 29.4252]
// };
// var map = new mapboxgl.Map(mapOptions);
// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.4916, 29.4252])
//     .addTo(map);
// does not work
// var btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", () => map.style = 'mapbox://styles/mapbox/streets-v9');
// var btn2 = document.getElementById("btn2");
// btn2.addEventListener("click", () => map.style = 'mapbox://styles/mapbox/dark-v10');
// var btn3 = document.getElementById("btn3");
// btn3.addEventListener("click", () => map.style = 'mapbox://styles/mapbox/satellite-streets-v11');
// var btn4 = document.getElementById("btn4");
// btn4.addEventListener("click", () => map.center = [-98.4916, 29.4252]);
// var btn5 = document.getElementById("btn5");
// btn5.addEventListener("click", () => map.center = [-98.4916, 29.4252]);
// var btn6 = document.getElementById("btn6");
// btn6.addEventListener("click", () => map.zoom = map.zoom + 1);
// var btn7 = document.getElementById("btn7");
// btn7.addEventListener("click", () => map.zoom = map.zoom - 1);


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
// TODO TOGETHER: Change the color of the marker
// var markerOptions = {
//     color: "ff0000",
//     draggable: true
// }
// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.489615, 29.4252])
//     .addTo(map);
// console.log(marker.getLngLat());



// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!
// COMPLETE

/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.
// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map)
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember The Alamo!</p>")
//     .addTo(map)
// marker.setPopup(alamoPopup);
// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
mapboxgl.accessToken = mapboxToken;
var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
};
var map = new mapboxgl.Map(mapOptions);
geocode("The White House", mapboxToken).then(result => {
    console.log(result);
    //recenter the map
    map.setCenter(result);
    map.setZoom(15);
    //add a marker
    var markerOptions = {
    color: "ff0000",
    draggable: true
}
    var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat(result)
    .addTo(map);
    var popup = new mapboxgl.Popup()
        .setHTML('Found Location')
        .addTo(map);
    marker.setPopup(popup);
});

//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


