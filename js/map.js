function initMap() {
  var mapPosition = {lat: 59.93643, lng: 30.32104};
  var markerPosition = {lat: 59.93610, lng: 30.32104};

  var map = new google.maps.Map(document.getElementById('contacts-map'), {
    zoom: 16,
    center: mapPosition,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: markerPosition,
    map: map,
    icon: 'img/icon-map-marker.svg'
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(mapPosition);
  });
}
