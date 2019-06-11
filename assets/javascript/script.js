
$(document).ready(function () {
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
        marinaDistrict: "37.8038433,-122.4418518"
    };
    
    var parseCoords = function(neighboorhood){ // Takes string from neighboorhood variables and creates lat/lng coordinates
        neighboorhood.split(",")[0] = queryParams.latitude
        neighboorhood.split(",")[1] = queryParams.longitude
        queryParams.radius = "1500"
    } 

    // Default values for queryUrl
    var baseUrl = "https://api.yelp.com/v3/businesses/search?";
    var queryParams = {"radius": "3000"};
    queryParams.sort_by = "rating"
    queryParams.latitude = "37.8087";  // Default location is San Franscisco
    queryParams.longitude = "-122.4098";
    queryParams.open_now = true;
    queryParams.price = "1,2,3,4";
    
    $(".user-select, .dropdown-item").on("click", function (){ //event listener to select query paramaters
        $("#render-businesses").empty(); //empties previous search query

        var userSelect = $(this).val()
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
    
            console.log(queryUrl)
        } else if (userSelect ==="price2") {
            queryParams.price = "2";
    
            console.log(queryUrl)
        } else if (userSelect ==="price3") {
            queryParams.price = "3";
    
            console.log(queryUrl)
        } else if (userSelect ==="price4") {
            queryParams.price = "4";
    
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
        
        
        //Ajax call to Yelp API
          $.ajax({
            url: queryUrl,
            method: "GET",
                  
            headers: {
              authorization: "Bearer KQWhz9_RIh91MBjFk0ieWlqw9hOdrfJPFDZsGeAQcd3xPc9KV57sSDZBxftr2vfBqFjgcq2nBuas8lZ8wVDWHbtYQQFLpneMHocF27Tk_43hgOjMY-fT2hnGt1P9XHYx"
            }
          }).then(function (response) {
            console.log(response)

            for (var i = 0; i < response.businesses.length; i++) {
                var img = $("<img>")
                img.addClass("thumbnail")
                img.attr("src", response.businesses[i].image_url)
                
                var h2 = $("<h2>")
                h2.addClass("name")
                h2.text(response.businesses[i].name)
                
                var p = $("<p>")
                p.addClass("address")
                p.text(response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code)
                
                var siteLink = $("<a>")
                siteLink.attr("href", response.businesses[i].url)
                siteLink.attr("target", "_blank")
                siteLink.text("Yelp Logo")
                
                var priceRange = $("<p>")
                priceRange.addClass("price")
                priceRange.text(response.businesses[i].price)
                
                var rating = $("<p>")
                rating.addClass("rating")
                rating.text("Rating: " + response.businesses[i].rating)

                var hr = $("<hr>")

                var businessesDiv = $("#render-businesses")

                businessesDiv.append([img, h2, p, siteLink, priceRange, rating, hr])
            }
    
          });
        }); 
    });


    