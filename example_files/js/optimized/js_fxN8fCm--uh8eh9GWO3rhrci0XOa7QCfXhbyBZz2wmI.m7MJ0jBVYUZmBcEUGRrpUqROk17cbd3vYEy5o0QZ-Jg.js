/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/geolocation/modules/geolocation_leaflet/js/MapFeature/geolocation-control-fullscreen.js. */
(function(Drupal){'use strict';Drupal.behaviors.leafletControlFullscreen={attach:function(context,drupalSettings){Drupal.geolocation.executeFeatureOnAllMaps('leaflet_control_fullscreen',function(map,featureSettings){L.control.fullscreen({position:featureSettings.position}).addTo(map.leafletMap);return true},drupalSettings)},detach:function(context,drupalSettings){}}})(Drupal)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/geolocation/modules/geolocation_leaflet/js/MapFeature/geolocation-control-fullscreen.js. */