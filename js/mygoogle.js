function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: {lat: 40.138323, lng: -99.999396}
    });

var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);

var kml1 = new google.maps.KmlLayer({
        url: 'http://gis.ngdc.noaa.gov/export/hazards/hazards.kmz',
        preserveViewport: true
      });
      kml1.setMap( map );

var kml2 = new google.maps.KmlLayer({
          url: 'http://earthquake.usgs.gov/regional/nca/virtualtour/kml/plateboundaries.kmz',
          preserveViewport: true
        });
        kml2.setMap( map );
     }
