var buttonColours = ["red", "blue", "green", "yelow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

$(document).keydown(function() {
    if(!started){
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
        
    }
});


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function nextSequence(){
    level++;
    $("#level-title").text("Level "+ level);

    var num = Math.random();
    var randomNumber = num*4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);

    
    // var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    // audio.play();
}

$(".btn").on("click",function(){
    // var userChosenColor = "#"+randomChosenColour;
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}



// $("div").stop().css("background-color", "#FFFF9C")
// .animate({ backgroundColor: "#FFFFFF"}, 1500);

// $("#"+"randomChosenColour").stop().css("background-color", "#FFFF9C").animate({ backgroundColor: "#FFFFFF"}, 1500);