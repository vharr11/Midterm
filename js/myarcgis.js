var map;
    require([
      "esri/map",
      "esri/dijit/BasemapToggle",
      "esri/layers/ArcGISDynamicMapServiceLayer",
      "dojo/domReady!"
    ], function(
      Map,
      BasemapToggle,
      ArcGISDynamicMapServiceLayer
    )  {

var map = new Map("map", {
        center: [-99.999396, 40.138323],
        zoom: 4,
        basemap: "topo"
      });

var toggle = new BasemapToggle({
        map: map,
        basemap: "satellite"
      }, "BasemapToggle");
      toggle.startup();

var layer1 = new ArcGISDynamicMapServiceLayer("http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/" ,
      {opacity: 0.25});
      map.addLayer(layer1);

var layer2 = new ArcGISDynamicMapServiceLayer("http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/",
      {opacity: 0.9});
      map.addLayer(layer2);

var layer3 = new ArcGISDynamicMapServiceLayer("http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/" ,
      {opacity: 0.75});
      map.addLayer(layer3);

      });
