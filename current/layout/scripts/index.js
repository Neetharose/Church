// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  const map1 = new google.maps.Map(document.getElementById("map1"), {
    zoom: 4,
    center: uluru,
  });
  const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 4,
    center: uluru,
  });
  const map3 = new google.maps.Map(document.getElementById("map3"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
 
}

