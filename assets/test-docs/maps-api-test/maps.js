
    var queryUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
    
    var queryParams = { "key": "AIzaSyAcbZ5RSSMLD-LsEWsG3R-bf-b-6ulyMqw"}
    
    queryParams.location = "37.8087,-122.4098" //specifies location for search (San Francisco in this example)

    queryParams.radius = 1500; //1500 meters is just within 1 mile
    
    queryParams.type = "cafe"
    queryParams.keyword = "starbucks,peets,philz"
    
    queryParams.maxprice = 2; //specified 0-4, 4 being most expensive
    
    queryParams.opennow = true; //only shows places currently open
    

    //Location Parameters
    var sanFrancisco = {
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
    
    console.log(sanFrancisco)
    
    console.log(queryUrl + $.param(queryParams)) //**TAKE THIS STRING AND ENTER IT INTO AN AJAX CALL TO GET JSON OBJ BACK**
    
        //TODO: Take object data and and obtain Place Details (yelp api or google places api) to get a return for the business data to post onto infoWindow in Javascript MAP or onto page. 

    
    $(document).on("click", ".user-select", function (){ //event listener to select query paramaters
        var userSelect = $(this).val()
        //Type of search
        if (userSelect === "bar"){
            queryParams.type = "bar"
            queryParams.keyword = "pub,bar,wine,alcohol"

            console.log(queryUrl + $.param(queryParams))
        } else if (userSelect === "cafe") {
            queryParams.type = "cafe"
            queryParams.keyword = "starbucks,peets,philz"

            console.log(queryUrl + $.param(queryParams))
        }

        //Price Range
        if (userSelect === "price0") {
            queryParams.maxprice = 0;

            console.log(queryUrl + $.param(queryParams))
        } else if (userSelect ==="price1") {
            queryParams.maxprice = 1;

            console.log(queryUrl + $.param(queryParams))
        } else if (userSelect ==="price2") {
            queryParams.maxprice = 2;

            console.log(queryUrl + $.param(queryParams))
        } else if (userSelect ==="price3") {
            queryParams.maxprice = 3;

            console.log(queryUrl + $.param(queryParams))
        } else if (userSelect ==="price4") {
            queryParams.maxprice = 4;

            console.log(queryUrl + $.param(queryParams))
        }

        //Location Filter
        if (userSelect === "inner-richmond") {
            queryParams.location = sanFrancisco.innerRichmond;
            parseCoords = sanFrancisco.innerRichmond

            console.log(queryUrl + $.param(queryParams))
        } else if (userSelect === "outer-richmond") {
            queryParams.location = sanFrancisco.outerRichmond;
            parseCoords = sanFrancisco.outerRichmond

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "inner-sunset") {
            queryParams.location = sanFrancisco.innerSunset;
            parseCoords = sanFrancisco.innerSunset

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "outer-sunset") {
            queryParams.location = sanFrancisco.outerSunset;
            parseCoords = sanFrancisco.outerSunset

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "forest-hill") {
            queryParams.location = sanFrancisco.forestHill;
            parseCoords = sanFrancisco.forestHill

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "the-castro") {
            queryParams.location = sanFrancisco.theCastro;
            parseCoords = sanFrancisco.theCastro

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "pacific-heights") {
            queryParams.location = sanFrancisco.pacificHeights;
            parseCoords = sanFrancisco.pacificHeights

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "panhandle") {
            queryParams.location = sanFrancisco.panhandle;
            parseCoords = sanFrancisco.panhandle

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "excelsior") {
            queryParams.location = sanFrancisco.excelsior;
            parseCoords = sanFrancisco.excelsior

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "mission-district") {
            queryParams.location = sanFrancisco.missionDistrict;
            parseCoords = sanFrancisco.missionDistrict

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "potrero-hill") {
            queryParams.location = sanFrancisco.potreroHill;
            parseCoords = sanFrancisco.potreroHill

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "fillmore") {
            queryParams.location = sanFrancisco.fillmoreDistrict;
            parseCoords = sanFrancisco.fillmoreDistrict

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "soma") {
            queryParams.location = sanFrancisco.soMa;
            parseCoords = sanFrancisco.soMa

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "financial-district") {
            queryParams.location = sanFrancisco.financialDistrict;
            parseCoords = sanFrancisco.financialDistrict

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "north-beach") {
            queryParams.location = sanFrancisco.northBeach;
            parseCoords = sanFrancisco.northBeach

            console.log(queryUrl + $.param(queryParams))            
        } else if (userSelect === "marina-district") {
            queryParams.location = sanFrancisco.marinaDistrict;
            parseCoords = sanFrancisco.marinaDistrict

            console.log(queryUrl + $.param(queryParams))            
        }

        strLat = parseCoords.split(",")[0];
        strLng = parseCoords.split(",")[1];

        userLocation = {lat: strLat, lng: strLng};

        console.log(userLocation)
        
        console.log(userSelect + ": " + JSON.stringify(userLocation))
    })

    
        console.log(sanFrancisco.fillmoreDistrict.split(",")[0]) //splits string used in query to create array
        console.log(sanFrancisco.fillmoreDistrict.split(",")[1])


    




    /////////////////////////////////////////////////////////////////////////////////////////////
    //  -- INITIALIZE GOOGLE MAP API AND CREATE MARKERS --
    //////////////////////////////////////////////////////////////////////////////////////////////
    // google.maps.event.trigger(map, 'resize'); // code to redraw jaascript map
    ///////////////////////////
   var myLocation = {lat:37.8087, lng:-122.4098};

    function initMap(){
        var options = { // Variable for google maps options
            zoom: 16, // Zoom preferabble for seeing all streets and businesses
            center: myLocation // map centered at variable location (for app, should be user's location)
        }
        // Creates new map object
        var map = new google.maps.Map(document.getElementById("map"), options)


        //Array of Markers
        var markers = [
            {
            coords:{lat:37.8015, lng:-122.3975},
            content: "Exploratorium"
            },
            {
            coords:{lat:37.8087, lng:-122.4098},
            iconImage:"https://img.icons8.com/cotton/64/000000/cafe.png",
            content: "<h1>PIER 39</h1>"
            }
        ];

        // Loop through markers
        for (var i = 0; i < markers.length; i++) {
            addMarker(markers[i])
        }


        // Add Marker Function
        function addMarker(props){
            var marker = new google.maps.Marker({
                position: props.coords, // position of the marker
                map: map, // links which map this marker is placed on (#map)
                // icon: props.iconImage // link to marker img
            });

            //Check for customIcon, otherwise sets to default
            if(props.iconImage){
                // Set icon image
                marker.setIcon(props.iconImage);
            }

            //Checks content for infoWindow
            if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                content:props.content
                });
            }

            var infoWindow = new google.maps.InfoWindow({
            content:props.content
            });
        
            marker.addListener("click", function () {
                infoWindow.open(map, marker);
            })
        }
    }