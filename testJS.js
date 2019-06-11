$(document).ready(function() {


$("#loading-page").show()
$("#main-page").hide()

setTimeout(function(){$('#loading-page').hide();}, 1000);
setTimeout(function(){$('#main-page').show();}, 1000);

$("#array-coffee").hide()
$("#array-drink").hide()
$("#google-maps").hide()
$("#second-user-input-page").hide();


//Declare variables
var alcohol = 0;
var coffee = 0;

//Event handler: when user picks alcohol
$("#user-pick-alc").on("click",function() {
    alcohol = 1;
    coffee = 0; 
    $("#main-page").hide()
    $("#second-user-input-page").show()
});


//Event handler: when user picks coffee
$("#user-pick-coffee").on("click",function() {
    coffee = 1;
    alcohol = 0; 
    $("#main-page").hide()
    $("#second-user-input-page").show()
});

//Event handler: when user clicks on price or location option
$("#oneD, #twoD, #threeD, #fourD, #IR, #OR, #IS, #OS, #FH, #C, #pacificH, #P, #E, #missionD, #potreroH, #marinaD, #F, #SOMA, #FiDi, #NB").on("click",function(){
if (coffee === 1){
    $("#second-user-input-page").hide()
    $("#array-coffee").show()
}

if (alcohol === 1){
    $("#second-user-input-page").hide()
    $("#array-drink").show()
}
});

}); //END document ready function