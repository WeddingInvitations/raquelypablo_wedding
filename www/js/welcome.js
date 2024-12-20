// Establece la fecha objetivo
const fechaObjetivo = new Date("May 31, 2025 13:00:00").getTime();

// Actualiza la cuenta regresiva cada 1 segundo
const x = setInterval(function() {

  // Obtén la fecha y hora actual
  const ahora = new Date().getTime();

  // Encuentra la distancia entre ahora y la fecha objetivo
  const distancia = fechaObjetivo - ahora;

  // Calcula el tiempo para días, horas, minutos y segundos
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Muestra el resultado en los elementos con los IDs correspondientes
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

  // Si la cuenta regresiva ha terminado, escribe un mensaje
  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("cuenta-atras").innerHTML = "¡La cuenta regresiva ha terminado!";
  }
}, 1000);


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

