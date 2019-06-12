$(document).ready(function() {


$("#loading-page").show()
$("#main-page").hide()

setTimeout(function(){$('#loading-page').hide();}, 3000);
setTimeout(function(){$('#main-page').show();}, 3000);

$("#array-coffee").hide()
$("#array-drink").hide()
$("#google-maps").hide()
$("#second-user-input-page").hide();


//Declare variables
var alcohol = 0;
var coffee = 0;
var tyNextC = 0; 
var tyNextA = 0; 

//Event handler: when user clicks on image
$("#alc-picture").on("click",function(e) {
    var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
    var pOffset = $(this).offset(); 
    var x = e.pageX - pOffset.left;
    if(pWidth/2 > x){
        $("#alc-picture").addClass("rotate-center-left")
        setTimeout(function(){ $("#alc-picture").removeClass("rotate-center-left");},1000)
        alcohol = 1;
        coffee = 0; 
        setTimeout(function(){$('#main-page').hide();}, 1000);
        setTimeout(function(){$('#second-user-input-page').show();}, 1000);
    } else{
        $("#alc-picture").addClass("rotate-center-right")
        setTimeout(function(){ $("#alc-picture").removeClass("rotate-center-right");},1000)

        coffee = 1;
        alcohol = 0; 
        setTimeout(function(){$('#main-page').hide();}, 1000);
        setTimeout(function(){$('#second-user-input-page').show();}, 1000);
    }
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

//Event handler: when user clicks "thank you, next"
$("#next-button-1").on("click",function(){
    tyNextC++
    console.log(tyNextC)
    if (tyNextC === 3){
        $("#array-coffee").hide()
        $("#google-maps").show()

    }
});

$("#next-button-2").on("click",function(){
    tyNextA++
    console.log(tyNextA)
    if (tyNextA === 3){
        $("#array-drink").hide()
        $("#google-maps").show()
    }
});
