/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/core/assets/vendor/jquery.ui/ui/plugin-min.js. */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}})
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/core/assets/vendor/jquery.ui/ui/plugin-min.js. */