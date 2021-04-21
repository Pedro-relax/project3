function initMap() {
  // The location of Uluru
  var uluru = { lat: -3.462820496494796, lng: -62.21562318034038 };
  
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
	animation: google.maps.Animation.BOUNCE,
	icon:'crash.png',
  });
}
google.maps.event.addDomListener(window, 'load', initMap);