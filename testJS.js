$(document).ready(function() {

$("#loading-page").hide()
$("#main-page").show()

$("#array-coffee").hide()
$("#array-drink").hide()
$("#google-maps").hide()
$("#second-user-input-page").hide();

//Event handler: when user picks alcohol
$("#user-pick-alc").on("click",function() {
    $("#main-page").hide()
    $("#second-user-input-page").show()
});

//Event handler: when user picks coffee
$("#user-pick-coffee").on("click",function() {
    $("#main-page").hide()
    $("#second-user-input-page").show()
});




}); //END document ready function