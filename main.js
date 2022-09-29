var stroke_w = 5;
//stroke_weight=document.getElementById("stroke_weight").value;

function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}

function setup(){
canvas=createCanvas(350,350);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;

stroke_w=stroke_weight.value();
}

function draw(){
strokeWeight(stroke_w);
stroke("black");
if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function clearCanvas(){
background("white");
}

function classifyCanvas(){
    console.log("Classify");
}