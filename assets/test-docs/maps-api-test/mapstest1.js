window.gMapsCallback = function(){
  $(window).trigger('gMapsLoaded');
}

function loadGoogleMaps(){
  var script_tag = document.createElement('script');
  script_tag.setAttribute("type","text/javascript");
  script_tag.setAttribute("src","http://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback");
  (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
}

var geocoder;

function initMap() {
  var map;
  var address1 = "933 Cabrillo St, San Francisco, CA";
  var address2 = "Vin Debut, San Francisco, CA";
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644); //is overriden by var address
    var myOptions = {
      zoom: 16,
      center: latlng,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map1 = new google.maps.Map(document.getElementById("map"), myOptions);
    map2 = new google.maps.Map(document.getElementById("map2"), myOptions);

  
    if (geocoder) {
      geocoder.geocode({
        'address': address1
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
            map1.setCenter(results[0].geometry.location);
  
            var infowindow1 = new google.maps.InfoWindow({
              content: '<b>' + address1 + '</b>',
              size: new google.maps.Size(150, 50)
            });
  
            var marker1 = new google.maps.Marker({
              position: results[0].geometry.location,
              map: map1,
              title: address1
            });


            google.maps.event.addListener(marker1, 'click', function() {
              infowindow1.open(map, marker1);
            });
  
          } else {
            alert("No results found");
          }
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
    if (geocoder) {
      geocoder.geocode({
        'address': address2
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
            map2.setCenter(results[0].geometry.location);
  
  
            var infowindow2 = new google.maps.InfoWindow({
              content: '<b>' + address2 + '</b>',
              size: new google.maps.Size(150, 50)
            });
  
            var marker2 = new google.maps.Marker({
              position: results[0].geometry.location,
              map: map2,
              title: address2
            });

            google.maps.event.addListener(marker2, 'click', function() {
              infowindow2.open(map, marker2);
            });
  
          } else {
            alert("No results found");
          }
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }

  $(window).bind('gMapsLoaded', initialize);
    loadGoogleMaps();
