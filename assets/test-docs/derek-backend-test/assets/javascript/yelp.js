$(document).ready(function () {

    jQuery.ajaxPrefilter(function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
      }
    });

    $(document).on("submit", function () {
      event.preventDefault()

      var location = "San Francisco";
      var category;

      if ($("button").val() === "bars") {
        //   var location = "San Francisco";
        category = "Bars"; 
        };
        

      $.ajax({
        url: 'https://api.yelp.com/v3/businesses/search?term=' + category + '&location=' + location + '',
        method: "GET",
              
        headers: {
          authorization: "Bearer KQWhz9_RIh91MBjFk0ieWlqw9hOdrfJPFDZsGeAQcd3xPc9KV57sSDZBxftr2vfBqFjgcq2nBuas8lZ8wVDWHbtYQQFLpneMHocF27Tk_43hgOjMY-fT2hnGt1P9XHYx"
        }
      }).then(function (response) {
        console.log(response)
        //conditional statement for isClosed?
        for (var i = 0; i < response.businesses.length; i++) {
            $(".container").append('<img class="thumbnail" src="' + response.businesses[i].image_url + '"/><h2 class="name">' + response.businesses[i].name + '</h2><p class="phone">'+response.businesses[i].display_phone+'</p><p class="address">' + response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + '</p><p class="url"><a href=' + response.businesses[i].url + " target='_blank'>" + "Yelp Logo" + '</a></p><p class="price">' + response.businesses[i].price + '</p><p class="is_closed">' + "Is closed?: " + response.businesses[i].is_closed + '</p><p class="rating">' + "Rating: " + response.businesses[i].rating + '</p><hr>')
        }

      });
    }); 
});
    
    // else if ($("button").val() === "coffee") {
    //     var location = "San Francisco";
    //     var category = "Coffee";

    //   $.ajax({
    //     url: 'https://api.yelp.com/v3/businesses/search?term=' + category + '&location=' + location + '',
    //     method: "GET",
              
    //     headers: {
    //       authorization: "Bearer KQWhz9_RIh91MBjFk0ieWlqw9hOdrfJPFDZsGeAQcd3xPc9KV57sSDZBxftr2vfBqFjgcq2nBuas8lZ8wVDWHbtYQQFLpneMHocF27Tk_43hgOjMY-fT2hnGt1P9XHYx"
    //     }
    //   }).then(function (response) {
    //     console.log(response)

    //     for (var i = 0; i < response.businesses.length; i++) {
    //       $(".container").append('<img class="thumbnail" src="' + response.businesses[i].image_url + '"/><h2 class="name">' + response.businesses[i].name + '</h2><p class="phone">'+response.businesses[i].display_phone+'</p><p class="address">' + response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + '</p><hr><h2><p class="rating">' + response.businesses[i].rating + '</p></h2>');
//         }

//       });
//     }
//     });
//   });
// 