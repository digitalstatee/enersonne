let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.4167,
      lng: -3.70325
    },
    zoom: 6
  });

  var kmlLayer = new google.maps.KmlLayer({
    url: "https://p9n42s.csb.app/enersonne.kml",
    map: map,
    clickable: true,
    preserveViewport: true,
    suppressInfoWindows: false,
    screenOverlays: true,
    zIndex: 1
  });
}
