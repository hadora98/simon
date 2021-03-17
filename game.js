var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;
$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length-1);

});
$(document).keydown(function(){

started=true;

    nextSequence();

})

function nextSequence(){
userClickedPattern=[];
level+=1;
$('h1').text("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
 $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
animatePress(randomChosenColour);



}

function playSound(name){
  var sound="sounds/"+name+".mp3";
  var audio=new Audio(sound);
  audio.play();
}
function animatePress(name){
  $("."+name).addClass("pressed");
  setTimeout(function(){
    $("."+name).removeClass("pressed");

  },100);
}
function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
  console.log("success")


if(userClickedPattern.length===gamePattern.length){
  setTimeout(function(){
  nextSequence();

},1000);
}

  }
  else{
    $('body').addClass("game-over");
    setTimeout(function(){
    $('body').removeClass("game-over");
  },200);
$("h1").text("Game over, Press Any Key to Restart");
startOver();
    console.log("wrong")


  }


}
function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
