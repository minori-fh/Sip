// START Render Google Maps
var geocoder;

function initMap() {
var map;
// var address1 = "933 Cabrillo St, San Francisco, CA";
// var address2 = "Vin Debut, San Francisco, CA";
var address1 = address1Object;
var address2 = address2Object;
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
    map1 = new google.maps.Map(document.getElementById("map-1b"), myOptions);
    map2 = new google.maps.Map(document.getElementById("map-2b"), myOptions);
    map3 = new google.maps.Map(document.getElementById("map-1a"), myOptions);
    map4 = new google.maps.Map(document.getElementById("map-2a"), myOptions);
    map5 = new google.maps.Map(document.getElementById("gm-large"), myOptions);


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
        console.log("Mouse movement: " + moveCounter);
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
    
//Function declaration
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
                businessInfo1.prepend("<b> Price: </b>" + response.businesses[i].price + "<br><br>")
                businessInfo1.prepend("<b> Location: </b>" + response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + "<br>")
                
                address1Object = ("<b> Location: </b>" + response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + "<br>")
                
                businessInfo1.prepend("<b> Rating: </b>" + response.businesses[i].rating + "<br>")
                businessInfo1.prepend("<span style = 'font-size: 30px'><b>" + response.businesses[i].name + "</b></span><br><br>")
                $(".description-1").css("background-color", "white")
                $(".description-1").css("height", "220px")
    
                // Option 2
                businessInfo2.prepend(anchorLogo2)
                businessInfo2.prepend("<b> Review Count: </b>" + response.businesses[i+1].review_count + "<br>")
                businessInfo2.prepend("<b> Price: </b>" + response.businesses[i+1].price + "<br><br>")
                businessInfo2.prepend("<b> Location: </b>" + response.businesses[i+1].location.address1 + ', ' + response.businesses[i+1].location.city + ' ' + response.businesses[i+1].location.zip_code + "<br>")
                
                address2Object = ("Location: " + response.businesses[i+1].location.address1 + ', ' + response.businesses[i+1].location.city + ' ' + response.businesses[i+1].location.zip_code + "<br>")
                
                businessInfo2.prepend("<b> Rating: <b>" + response.businesses[i+1].rating + "<br>")
                businessInfo2.prepend("<span style = 'font-size: 30px'><b>" + response.businesses[i+1].name + "</b></span><br><br>")
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
});

$(".dropdown-item").on("click", function(){
    key = $(this).attr("data-value")

    if (key != ""){
        userSelectPrice = "3"
        printData();
        i = 0
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
        $("#google-maps").show()
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
        $("#google-maps").show()
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
    tynA = 0;
    tynC = 0; 
    bar = 0; 
    cafe = 0; 
});
}) //END: document ready function 

