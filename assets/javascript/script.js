
$(document).ready(function () {
    var i = 0;
    var tyNextC = 0; 
    var tyNextA = 0; 


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
    
    
    // Default values for queryUrl
    var baseUrl = "https://api.yelp.com/v3/businesses/search?";
    var queryParams = {"radius": "1500"};
    queryParams.sort_by = "rating"
    queryParams.latitude;  // Default location is San Franscisco
    queryParams.longitude;
    queryParams.open_now = true;
    queryParams.price = "3";
 
    var parseCoords = function(neighboorhood){ // Takes string from neighboorhood variables and creates lat/lng coordinates
        var parseLat = neighboorhood.split(",")[0]
        queryParams.latitude = parseLat
        var parseLng = neighboorhood.split(",")[1]
        queryParams.longitude = parseLng
    } 
    
    $(".user-select, .dropdown-item").on("click", function (){ //event listener to select query paramaters
        $("#render-businesses").empty(); //empties previous search query

        var userSelect = $(this).attr("data-value")
        console.log(userSelect)

        var queryUrl = (baseUrl + $.param(queryParams))
        console.log(queryUrl)
         //Type of search
         if (userSelect === "bar"){
            queryParams.category = "bar"

            console.log(queryUrl)
        } else if (userSelect === "cafe") {
            queryParams.category = "cafe"

            console.log(queryUrl)
        }

        //Price Range
        if (userSelect === "price1") {
            queryParams.price = "1";
            queryParams.latitude = "37.8087"
            queryParams.longitude = "-122.4098"
            
    
            console.log(queryUrl)
        } else if (userSelect ==="price2") {
            queryParams.price = "2";
            queryParams.latitude = "37.8087"
            queryParams.longitude = "-122.4098"
    
            console.log(queryUrl)
        } else if (userSelect ==="price3") {
            queryParams.price = "3";
            queryParams.latitude = "37.8087"
            queryParams.longitude = "-122.4098"
    
            console.log(queryUrl)
        } else if (userSelect ==="price4") {
            queryParams.price = "4";
            queryParams.latitude = "37.8087"
            queryParams.longitude = "-122.4098"
    
            console.log(queryUrl)
        }

        //Location Filter
        if (userSelect === "inner-richmond") {
            parseCoords(sanFrancisco.innerRichmond)

            console.log(queryUrl)
        } else if (userSelect === "outer-richmond") {
            parseCoords(sanFrancisco.outerRichmond)
 
        } else if (userSelect === "inner-sunset") {
            parseCoords(sanFrancisco.innerSunset)
 
        } else if (userSelect === "outer-sunset") {
            parseCoords(sanFrancisco.outerSunset)
 
        } else if (userSelect === "forest-hill") {
            parseCoords(sanFrancisco.forestHill)
 
        } else if (userSelect === "the-castro") {
            parseCoords(sanFrancisco.theCastro)
 
        } else if (userSelect === "pacific-heights") {
            parseCoords(sanFrancisco.pacificHeights)
 
        } else if (userSelect === "panhandle") {
            parseCoords(sanFrancisco.panhandle)
 
        } else if (userSelect === "excelsior") {
            parseCoords(sanFrancisco.excelsior)
 
        } else if (userSelect === "mission-district") {
            parseCoords(sanFrancisco.missionDistrict)
 
        } else if (userSelect === "potrero-hill") {
            parseCoords(sanFrancisco.potreroHill)
 
        } else if (userSelect === "fillmore") {
            parseCoords(sanFrancisco.fillmoreDistrict)
 
        } else if (userSelect === "soma") {
            parseCoords(sanFrancisco.soMa)
 
        } else if (userSelect === "financial-district") {
            parseCoords(sanFrancisco.financialDistrict)
 
        } else if (userSelect === "north-beach") {
            parseCoords(sanFrancisco.northBeach)
 
        } else if (userSelect === "marina-district") {
            parseCoords(sanFrancisco.marinaDistrict)
 
        }

        jQuery.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });
        
        
        queryUrl = (baseUrl + $.param(queryParams)) // Consolidated GET url with updated variables after user selection
        console.log(queryUrl)
        


        //Ajax call to Yelp API
         var printData = function() {
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
     
                    // TODO: FORMATTING FOR DYNAMICALLY APPENDED INFORMATION.
     
                    var img1 = $(".img-1")
                    img1.addClass("thumbnail") // TODO: Add CSS for formatting images
                    img1.attr("src", response.businesses[i].image_url)
                    
                    var img2 = $(".img-2")
                    img2.addClass("thumbnail") // TODO: Add CSS for formatting images
                    img2.attr("src", response.businesses[i+1].image_url)
     
                    var businessName1 = $(".name-1") // TODO: Position bussiness name on top of business image; Maybe add white text stroke for text to pop out
                    businessName1.text(response.businesses[i].name)
        
                    var businessName2 = $(".name-2") // TODO: Position bussiness name on top of business image; Maybe add white text stroke for text to pop out
                    businessName2.text(response.businesses[i+1].name)
                    
                    var yelpLogo = $('<img>')
                    yelpLogo.attr("src", "assets/images/yelp-logo.png")
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
                    
                    businessInfo1.prepend(anchorLogo1)
                    businessInfo1.prepend("Price: " + response.businesses[i].price + "<br><br><br><br><br>")
                    businessInfo1.prepend("Location: " + response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + "<br>")
                    businessInfo1.prepend("Rating: " + response.businesses[i].rating + "<br>")
     
                    businessInfo2.prepend(anchorLogo2)
                    businessInfo2.prepend("Price: " + response.businesses[i+1].price + "<br><br><br><br><br>")
                    businessInfo2.prepend("Location: " + response.businesses[i+1].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + "<br>")
                    businessInfo2.prepend("Rating: " + response.businesses[i+1].rating + "<br>")
        
              });
             
        } 
        
        printData();
        i+2;
         
       }); 


// Event handler
$(".category").on("click",function(){
    category = $(this).attr("data-value")

    if (category === "bar"){
        bar = 1; 
        cafe = 0; 
    } else if (category === "cafe"){
        bar = 0;
        cafe = 1
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
}) //END: document ready function 


    