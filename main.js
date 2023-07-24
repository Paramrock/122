x = 0;
y = 0;

scree_height = 0;
screen_width = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  createCanvas( screen_width, screen_height-150);
  canvas.position(150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload()
{
  load_image = apple.png
  to_number = Number(content);

  if(Number.isInteger(to_number))
  {
    draw_apple = "set"
  }
  else
  {
    screen_width = widow.innerWidth;
    screen_height = widow.innerHeight;
  }
}
