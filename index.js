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
    url:
      "https://raw.githubusercontent.com/n0ss4/enersonne/csb-p9n42s/enersonne.kml",
    map: map,
    clickable: true,
    preserveViewport: true,
    suppressInfoWindows: true,
    screenOverlays: true,
    zIndex: 1
  });

  kmlLayer.addListener("click", function (event) {
    console.log({ event: event });
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.getElementById("capture");
    testimonial.innerHTML = content;
  });
}
