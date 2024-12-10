// Función para mostrar Google Maps
function initMap() {
  const myLatLng = {
    lat: 39.5502453707605,
    lng: -0.5390532750259345
  };
  var map = new google.maps.Map(document.getElementById("mapDiv"), {
    zoom: 11,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker ({
    position: myLatLng,
    map,
    title: "Mas de alzedo"
  });
}


// Itinerario
window.addEventListener('scroll', function() {
  const events = document.querySelectorAll('.event');
  const windowHeight = window.innerHeight;
  const triggerPoint = windowHeight * 0.85;

  events.forEach(event => {
    const eventTop = event.getBoundingClientRect().top;
    if (eventTop < triggerPoint) {
      event.classList.add('show');
    } else {
      event.classList.remove('show');
    }
  });
});

