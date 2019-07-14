# Project-01

## Description of Site
"Sip First" is an app for an individual that lives in SF and is looking to grab a drink. The premise of this site was to address paralysis by analysis which occurs when users are overwhelmed with too many choices and often do not feel satisfaction even after making a choice due to wondering, 'what if'. We address this issue by highlighting binary user choice in our design and providing the user with a smaller scope allowing for quicker, more concise decisions. 

###Logic
The basic logic flow of this web-based application begins with the user-input. The user inputs their parameters for their search, thus dynamically generating their final search query. That search query, once its parameters are completed, is used to perform an Ajax call to the Yelp API to return a JSON object with data to leveraged for rendering on the page. But before all of our information is rendered onto the page, we take location data from the Ajax call and send a request to the Google Maps API to dynamically generate a Javascript map w/ markers according to the location of the businesses received from the Yelp API.

tl;dr... [ WEB-CLIENT(input) ==> YELP API ==> GOOGLE API ==> WEB-CLIENT(render) ]

## Pictures of Site
Initial loading page: 
![Loading page Screenshot](assets/Images/site-1.png)
Page for the user to make two choices:
1.) Do they want to drink alcohol or coffee?
2.) What's most important to them: price or location? 
![Introduction scene Screenshot](assets/Images/site-2.gif)
Page for the user to go through 3 sets of two options
![Battlescene Screenshot](assets/Images/site-4.png)
Page for the user to see where their options are located
![Battlescene Screenshot](assets/Images/site-5.png)

## Technologies Used
1. HTML 
2. CSS
3. Bootstrap
4. Javascript
5. jQuery
6. AJAX calls for Google Maps and Yelp API
7. Codepen and animista libraries
8. Firebase

## Author(s): 
1. [Minori Hashimoto](https://github.com/minori-fh)
2. Derek Goldstone
3. Christopher Celestino
4. Joanne Badua
