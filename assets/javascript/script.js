// START Render Google Maps
var geocoder;
var address3Object = "San Francisco, CA"

function initMap() {
var map;
// var address1 = "933 Cabrillo St, San Francisco, CA";
// var address2 = "Vin Debut, San Francisco, CA";
var address1 = address1Object
var address2 = address2Object
var address3 = address3Object
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644); //is overriden by var address
    var myOptions = {
    zoom: 17,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var myOptions2 = {
    zoom: 14,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    map1 = new google.maps.Map(document.getElementById("map-1b"), myOptions);
    map2 = new google.maps.Map(document.getElementById("map-2b"), myOptions);
    map3 = new google.maps.Map(document.getElementById("map-1a"), myOptions);
    map4 = new google.maps.Map(document.getElementById("map-2a"), myOptions);
    map5 = new google.maps.Map(document.getElementById("gm-large"), myOptions2);


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
    if (geocoder) {
    geocoder.geocode({
        'address': address1
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
            map3.setCenter(results[0].geometry.location);

            var infowindow1 = new google.maps.InfoWindow({
            content: '<b>' + address1 + '</b>',
            size: new google.maps.Size(150, 50)
            });

            var marker1 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map3,
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
            map4.setCenter(results[0].geometry.location);


            var infowindow2 = new google.maps.InfoWindow({
            content: '<b>' + address2 + '</b>',
            size: new google.maps.Size(150, 50)
            });

            var marker2 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map4,
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

    //Large map geocoder
    if (geocoder) {
    geocoder.geocode({
        'address': address3
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
            map5.setCenter(results[0].geometry.location);


            var infowindow3 = new google.maps.InfoWindow({
            content: '<b>' + address3 + '</b>',
            size: new google.maps.Size(150, 50)
            });

        var getMarkerArray = [
            { 
            coords:{lat:storeLat0, lng:storeLng0},
            content: businessName0
            },
            { 
            coords:{lat:storeLat1, lng:storeLng1},
            content: businessName1
            },
            { 
            coords:{lat:storeLat2, lng:storeLng2},
            content: businessName2
            },
            { 
            coords:{lat:storeLat3, lng:storeLng3},
            content: businessName3
            },
            { 
            coords:{lat:storeLat4, lng:storeLng4},
            content: businessName4
            },
            { 
            coords:{lat:storeLat5, lng:storeLng5},
            content: businessName5
            },
            // { 
            // coords:{lat:storeLat6, lng:storeLng6},
            // content: businessName6
            // },
            // { 
            // coords:{lat:storeLat7, lng:storeLng7},
            // content: businessName7
            // },
            // { 
            // coords:{lat:storeLat8, lng:storeLng8},
            // content: businessName8
            // },
            // { 
            // coords:{lat:storeLat9, lng:storeLng9},
            // content: businessName9
            // },
            // { 
            // coords:{lat:storeLat10, lng:storeLng10},
            // content: businessName10
            // },
           
            
        ];

    
        //    var populateMarkerArray = function(responseCoords, responseNames) {
        //        for (var i = 0; i < coords.length; i++) {
        //            getMarkerArray.push({
        //                coords: responseCoords[i],
        //                content: responseNames[i]
        //            })
        //        }
        //        console.log(getMarkerArray)
        //    }

            // Create array for markers to be generated in nearby search.

            for (var i = 0; i < getMarkerArray.length; i++) {
                addMarker(getMarkerArray[i])
            }
    
    
            // Add Marker Function
            function addMarker(props){
                var marker3= new google.maps.Marker({
                    position: props.coords, // position of the marker
                    map: map5 // links which map this marker is placed on (#map)
                    // icon: props.iconImage // link to marker img
                });
    
                //Check for customIcon, otherwise sets to default
                if(props.iconImage){
                    // Set icon image
                    marker3.setIcon(props.iconImage);
                }
    
                //Checks content for infoWindow
                if(props.content){
                    var infoWindow5 = new google.maps.InfoWindow({
                    content:props.content
                    });
                }
    
                var infoWindow5 = new google.maps.InfoWindow({
                content:props.content
                });
            
                marker3.addListener("click", function () {
                    infoWindow5.open(map, marker3);
                })
            }


            google.maps.event.addListener(marker3, 'click', function() {
            infowindow3.open(map, marker3);
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


$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyAPjA-XMT67VmcctKBNVbpj8IW23j1WA3U",
      authDomain: "sip-project-app.firebaseapp.com",
      databaseURL: "https://sip-project-app.firebaseio.com",
      projectId: "sip-project-app",
      storageBucket: "sip-project-app.appspot.com",
      messagingSenderId: "218106770453",
      appId: "1:218106770453:web:4946e50cc1f06f14"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
      var database = firebase.database();
      var moveCounter = 0;
    
      $(document).mousemove(function() {
        moveCounter++;
        // console.log("Mouse movement: " + moveCounter);
        database.ref().set({
            moveCount: moveCounter
        });
    })

    $("#map-1b").css("position", "none !important")
// Variables to be put into queryURL
var sanFrancisco = { // Object with key-value pairs for neighboorhoods used for location search query
    innerRichmond: "37.7799,-122.4647",
    outerRichmond: "37.7777,-122.4953",
    innerSunset: "37.7607,-122.4680",
    outerSunset: "37.7553684,,-122.5024254",
    forestHill: "37.7476842,-122.4670707",
    theCastro: "37.7626682,-122.4372717",
    pacificHeights: "37.7925002,-122.4368397",
    panhandle: "37.7720591,-122.4501577",
    excelsior: "37.7241506,-122.4297002",
    missionDistrict: "37.7599213,-122.4256016",
    potreroHill: "37.7582827,-122.4013887",
    fillmoreDistrict: "37.7808194,-122.4340845",
    soMa: "37.7808323,-122.4111729",
    financialDistrict: "37.7927815,-122.4054696",
    northBeach: "37.8047205,-122.4125737",
    marinaDistrict: "37.8038433,-122.4418518",
    default: "37.8087,-122.4098" 
};

var tynA = 0;
var tynC = 0;
    
//Function declaration(s)

function reset(){
    tynA = 0;
    tynC = 0;
}

function printData(){
    var price = userSelectPrice
    var neighborhood = sanFrancisco[key]
        var latitude = neighborhood.split(",")[0]
        var longitude = neighborhood.split(",")[1]

    if (bar === 1){
        var category = "bar"
    } else if (cafe === 1){
        var category = "cafe"
    }

    console.log(category)
    console.log(price)
    console.log(latitude)
    console.log(longitude)


    // ***QUERY URL W/ OPEN NOW***
    // var queryUrl = "https://api.yelp.com/v3/businesses/search?radius=1500&sort_by=rating&open_now=true&price=" + price + "&category=" + category + "&latitude=" + latitude + "&longitude=" + longitude
    
    // ***QUERY URL W/O OPEN NOW***

    var queryUrl = "https://api.yelp.com/v3/businesses/search?radius=1500&sort_by=rating&price=" + price + "&category=" + category + "&latitude=" + latitude + "&longitude=" + longitude
    console.log(queryUrl)

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    $.ajax({
        url: queryUrl,
        method: "GET",
              
        headers: {
            authorization: "Bearer KQWhz9_RIh91MBjFk0ieWlqw9hOdrfJPFDZsGeAQcd3xPc9KV57sSDZBxftr2vfBqFjgcq2nBuas8lZ8wVDWHbtYQQFLpneMHocF27Tk_43hgOjMY-fT2hnGt1P9XHYx"
        }
    }).then(function (response) {
        console.log(response)
     
        //HARD CODED RESPONSE VARIABLES
        if (response.businesses[0]) {
            storeLat0 =  response.businesses[0].coordinates.latitude
            storeLng0 = response.businesses[0].coordinates.longitude
            businessName0 = response.businesses[0].name
        }

        console.log(storeLat0)
        if (response.businesses[1]) {
        storeLat1 =  response.businesses[1].coordinates.latitude
        storeLng1 = response.businesses[1].coordinates.longitude
        businessName1 = response.businesses[1].name
        }
        
        if (response.businesses[2]) {
        storeLat2 =  response.businesses[2].coordinates.latitude
        storeLng2 = response.businesses[2].coordinates.longitude
        businessName2 = response.businesses[2].name
        }
        
        if (response.businesses[3]) {
        storeLat3 =  response.businesses[3].coordinates.latitude
        storeLng3 = response.businesses[3].coordinates.longitude
        businessName3 = response.businesses[3].name
        }

        if (response.businesses[4]) {
        storeLat4 =  response.businesses[4].coordinates.latitude
        storeLng4 = response.businesses[4].coordinates.longitude
        businessName4 = response.businesses[4].name
        }

        if (response.businesses[5]) {
        storeLat5 =  response.businesses[5].coordinates.latitude
        storeLng5 = response.businesses[5].coordinates.longitude
        businessName5 = response.businesses[5].name
        }
        
        // if (response.businesses[6]) {
        // storeLat6 =  response.businesses[6].coordinates.latitude
        // storeLng6 = response.businesses[6].coordinates.longitude
        // businessName6 = response.businesses[6].name
        // }
        
        // if (response.businesses[7]) {
        // storeLat7 =  response.businesses[7].coordinates.latitude
        // storeLng7 = response.businesses[7].coordinates.longitude
        // businessName7 = response.businesses[7].name
        // }
        
        // if (response.businesses[8]) {
        // storeLat8 =  response.businesses[8].coordinates.latitude
        // storeLng8 = response.businesses[8].coordinates.longitude
        // businessName8 = response.businesses[8].name
        // }
        
        // if (response.businesses[9]) {
        // storeLat9 =  response.businesses[9].coordinates.latitude
        // storeLng9 = response.businesses[9].coordinates.longitude
        // businessName9 = response.businesses[9].name
        // }
        
        // if (response.businesses[10]) {
        // storeLat10 =  response.businesses[10].coordinates.latitude
        // storeLng10 = response.businesses[10].coordinates.longitude
        // businessName10 = response.businesses[10].name
        // }



        var businessInfo1 = $(".description-1")
            var businessInfo2 = $(".description-2")
            businessInfo1.empty()
            businessInfo2.empty()

            console.log(response.businesses[0].image_url)
            console.log(response.businesses[1].image_url)
            console.log(response.businesses.length)

            // TODO: FORMATTING FOR DYNAMICALLY APPENDED INFORMATION.
                console.log(i)

                var img1 = $(".img-1")
                img1.addClass("thumbnail") // TODO: Add CSS for formatting images
                img1.attr("src", response.businesses[i].image_url)
                
                var img2 = $(".img-2")
                img2.addClass("thumbnail") // TODO: Add CSS for formatting images
                img2.attr("src", response.businesses[i+1].image_url)
                
                var yelpLogo = $('<img>')
                yelpLogo.attr("src", "assets/Images/yelp-logo.png")
                yelpLogo.attr("width", "40px")
                
                var anchorLogo1 = $("<a>")
                anchorLogo1.attr("href", response.businesses[i].url)
                anchorLogo1.attr("target", "_blank")
                anchorLogo1.append(yelpLogo)
                yelpLogo.wrap(anchorLogo1)
                
                var anchorLogo2 = $("<a>")
                anchorLogo2.attr("href", response.businesses[i+1].url)
                anchorLogo2.attr("target", "_blank")
                anchorLogo2.append(yelpLogo)
                
                // Option 1
                businessInfo1.prepend(anchorLogo1)
                businessInfo1.prepend("<b> Review Count: </b>" + response.businesses[i].review_count + "<br>")
                businessInfo1.prepend("<b> Price: </b>" + response.businesses[i].price + "<br>")
                businessInfo1.prepend("<b> Location: </b>" + response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + "<br>")
                
                address1Object = ("<b> Location: </b>" + response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + "<br>")
                
                businessInfo1.prepend("<b> Rating: </b>" + response.businesses[i].rating + "<br>")
                businessInfo1.prepend("<span style = 'font-size: 20px'><b>" + response.businesses[i].name + "</b></span><br><br>")
                $(".description-1").css("background-color", "white")
                $(".description-1").css("height", "220px")
    
                // Option 2
                businessInfo2.prepend(anchorLogo2)
                businessInfo2.prepend("<b> Review Count: </b>" + response.businesses[i+1].review_count + "<br>")
                businessInfo2.prepend("<b> Price: </b>" + response.businesses[i+1].price + "<br>")
                businessInfo2.prepend("<b> Location: </b>" + response.businesses[i+1].location.address1 + ', ' + response.businesses[i+1].location.city + ' ' + response.businesses[i+1].location.zip_code + "<br>")
                
                address2Object = ("Location: " + response.businesses[i+1].location.address1 + ', ' + response.businesses[i+1].location.city + ' ' + response.businesses[i+1].location.zip_code + "<br>")
                
                businessInfo2.prepend("<b> Rating: </b>" + response.businesses[i+1].rating + "<br>")
                businessInfo2.prepend("<span style = 'font-size: 20px'><b>" + response.businesses[i+1].name + "</b></span><br><br>")
                $(".description-2").css("background-color", "white")
                $(".description-2").css("height", "220px")

                initMap();
                
                
            }); //END ajax call
            
} //END: function printData

// Event handlers
$(".category").on("click",function(){
    userSelectCategory = $(this).attr("data-value")

    if (userSelectCategory === "bar"){
        bar = 1; 
        cafe = 0; 
    } else if (userSelectCategory === "cafe"){
        bar = 0;
        cafe = 1;
    }
});

$(".dropdown-price").on("click", function(){
    userSelectPrice = $(this).attr("data-value")

    if (userSelectPrice != ""){
        key = "default"
        printData();
        i = 0
    }


    if (bar === 1){
        $("#second-user-input-page").hide()
        $("#array-drink").show()
    } else if (cafe === 1){
        $("#second-user-input-page").hide()
        $("#array-coffee").show()
    }

});

$(".dropdown-item").on("click", function(){
    key = $(this).attr("data-value")

    if (key != ""){
        userSelectPrice = "3"
        printData();
        i = 0
    }


    if (bar === 1){
        $("#second-user-input-page").hide()
        $("#array-drink").show()
    } else if (cafe === 1){
        $("#second-user-input-page").hide()
        $("#array-coffee").show()
    }

});

$("#next-button-1").on("click", function(){
    tynC++

    if (tynC === 1){
        i = 2
        printData()
    } else if (tynC === 2){
        i = 4
        printData()
    } else if (tynC === 3){
        $("#array-coffee").hide()
        $("#array-drink").hide()
        $("#google-maps").show()
        reset()
    }

});
    
$("#next-button-2").on("click", function(){
    tynA++

    if (tynA ===  1){
        i = 2
        printData()
    } else if (tynA === 2){
        i = 4
        printData()
    } else if (tynA === 3){
        $("#array-coffee").hide()
        $("#array-drink").hide()
        $("#google-maps").show()
        reset();
    }
});

$("#alc-picture").on("click",function(e) {
    var pWidth = $(this).innerWidth(); 
    var pOffset = $(this).offset(); 
    var x = e.pageX - pOffset.left;
    if(pWidth/2 > x){
        bar = 1
        cafe = 0
    } else{
        bar = 0
        cafe = 1
    }
});


$("#go-home").on("click",function(e) {
    $("#main-page").show();
    $("#google-maps").hide();
    $("#loading-page").hide();
    $("#array-coffee").hide()
    $("#array-drink").hide()
    $("#second-user-input-page").hide();

    tynA = 0;
    tynC = 0; 
    bar = 0; 
    cafe = 0; 
});


$("#search").on("click", function() {
    var userAddressSearch = $("#address").val()
    console.log(userAddressSearch)

    address3Object = userAddressSearch
    initMap();
})

$("#alc-picture").on("click",function(e) {
    var pWidth = $(this).innerWidth();
    var pOffset = $(this).offset(); 
    var x = e.pageX - pOffset.left;
    if(pWidth/2 > x){
        bar = 1
        cafe = 0
    } else{
        bar = 0
        cafe = 1
    }
});



}) //END: document ready function 

