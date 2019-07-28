# SIP :coffee: :tropical_drink:

## Description of Site
"Sip First" is an app for an individuals who live in SF and is looking to grab a drink. The premise of this site was to address paralysis by analysis which occurs when users are overwhelmed with too many choices and often do not feel satisfaction even after making a choice due to wondering, 'what if'. We address this issue by highlighting binary user choice in our design and providing the user with a smaller scope allowing for quicker, more concise decisions. 

### Logic
The basic logic flow of this web-based application begins with the user-input. The user inputs their parameters for their search, thus dynamically generating their final search query. That search query, once its parameters are completed, is used to perform an AJAX call to the Yelp API to return a JSON object with data to render on the page. After displaying 3 sets of 2 restaurant options, we display a final page showing a Google Map of all 6 options for the user. This was achieved by sending a request with the restaurant option locations to the Google Maps API to dynamically generate a map w/ markers. 

tl;dr...

```
[ WEB-CLIENT(input) ==> YELP API ==> GOOGLE API ==> WEB-CLIENT(render) ]
```

## Pictures of Site
[Click here to visit site](https://minori-fh.github.io/Sip/)

**Initial loading page:** 
![Loading page Screenshot](assets/Images/site_images/site-1.png)

**Page for the user to make two choices:**
1.) Do they want to drink alcohol or coffee? and 2.) What's most important to them: price or location? 

The user's choice was recorded using an on click event handler to determine which side of the image was clicked (left for alcohol and right for coffee).

```
//Event handler: when user clicks on image
$("#alc-picture").on("click",function(e) {
    var pWidth = $(this).innerWidth(); 
    var pOffset = $(this).offset(); 
    var x = e.pageX - pOffset.left;
    if(pWidth/2 > x){
        $("#alc-picture").addClass("rotate-center-left")
        setTimeout(function(){ $("#alc-picture").removeClass("rotate-center-left");},1000)
        alcohol = 1;
        coffee = 0; 
        // setTimeouts to manipulate HTML DOM for change in page
        setTimeout(function(){$('#main-page').hide();}, 1000);
        setTimeout(function(){$('#second-user-input-page').show();}, 1000);
        // add animation class to bounce images on next page
        $(".location-price").addClass("bounce-top")
    } else{
        $("#alc-picture").addClass("rotate-center-right")
        setTimeout(function(){ $("#alc-picture").removeClass("rotate-center-right");},1000)

        alcohol = 1;
        coffee = 0; 
        // setTimeouts to manipulate HTML DOM for change in page
        setTimeout(function(){$('#main-page').hide();}, 1000);
        setTimeout(function(){$('#second-user-input-page').show();}, 1000);
        // add animation class to bounce images on next page
        $(".location-price").addClass("bounce-top")
    }
});

```
![UserChoice1 Screenshot](assets/Images/site_images/site-2.gif)

**Page for the user to go through 3 sets of two options:**
![UseChoice2 Screenshot](assets/Images/site_images/site-4.png)

**Page for the user to see where their options are located:**
![Google Maps page Screenshot](assets/Images/site_images/site-5.png)

## Improvements for the Future
1. Mobile responsiveness
2. Incorporate user authentication to allow users to favorite bars/ cafes on their account to visit later
3. Ability to update the comments that users have already left on a doge
4. Refactor html code to separate files for easier maintenance 

## Getting Started
No external packages or installments are necessary to get a copy of the project up and running on your local machine for development or testing purposes. 

## Technologies Used
1. [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
2. [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
3. [Bootstrap](https://getbootstrap.com/)
4. [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
5. [jQuery](https://api.jquery.com/)
6. [Google Maps](https://developers.google.com/maps/documentation/) and [Yelp API](https://www.yelp.com/developers/documentation/v3)
8. [Firebase](https://firebase.google.com/docs)

## Author(s): 
1. [Minori Hashimoto](https://github.com/minori-fh)
2. Derek Goldstone
3. Christopher Celestino
4. Joanne Badua
