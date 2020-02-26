

let positionX;
let positionY;
let speedX;
let speedY;
let dw;

let brushSize;
let red;
let green;
let blue;

let mode;

let prevR;
let prevG;
let prevB;
let prevBack;

let firstTime;



function setup() {
  createCanvas(windowWidth-25, windowHeight-10);
  background(255);
  positionX = 100;
  positionY = 100;
  speedX = 0;
  speedY = 0;
  dw = true;
  firstTime = true;
  mode = true;

  change = createButton("Switch Modes");
  change.mousePressed(changeMode);
  change.position(0, windowHeight-110)

  checkbox = createCheckbox('Erase', false);
  checkbox.position(260, windowHeight-110);

  save = createButton("Save Canvas as image");
  save.mousePressed(saveX);
  save.position(100, windowHeight - 110 )

  sliderSize = createSlider(5,255,5);
  sliderSize.position(370, windowHeight-110);

  sliderR = createSlider(0, 255, 0);
  sliderR.position(0,windowHeight-80 - 10);

  sliderG = createSlider(0, 255, 0);
  sliderG.position(0,windowHeight+45-100- 10);

  sliderB = createSlider(0, 255, 0);
  sliderB.position(0,windowHeight+70-100- 10);
  brushSize = sliderSize.value();

  sliderBackground = createSlider(0, 255, 220);
  sliderBackground.position(580, windowHeight-110);

  prevR = sliderR.value();
  prevG = sliderG.value();
  prevB = sliderB.value();

  text("Size", 330, windowHeight - 110);
}

function draw() {



  if(sliderBackground.value() != prevBack){
    background(sliderBackground.value());
    prevBack = sliderBackground.value();
    firstTime = true;
  }


  noStroke();
  if(prevR != sliderR.value()){
    fill(sliderBackground.value());
    rect(150, windowHeight - 75 - 10, 20, 10);
    fill(0,0,0);
    text(sliderR.value(), 150, windowHeight - 65 - 10)
    fill(sliderR.value(), sliderG.value(), sliderB.value());
    ellipse(250, windowHeight-50,50, 50);
  }

  if(prevG != sliderG.value()){
    fill(sliderBackground.value());
    rect(150, windowHeight - 50- 10, 20, 10);
    fill(0,0,0);
    text(sliderG.value(), 150, windowHeight - 40- 10)
    fill(sliderR.value(), sliderG.value(), sliderB.value());
    ellipse(250, windowHeight-50,50, 50);
  }

  if(prevB != sliderB.value()){
    fill(sliderBackground.value());
    rect(150, windowHeight - 35, 20, 10);
    fill(0,0,0);
    text(sliderB.value(), 150, windowHeight - 15- 10)
    fill(sliderR.value(), sliderG.value(), sliderB.value());
    ellipse(250, windowHeight-50,50, 50);
  }


  if(checkbox.checked()){
    fill(sliderBackground.value());
  }

  if(firstTime){
    firstTime = false;
    console.log("setup");
    fill(0);
    text("Size", 330, windowHeight - 95);
    text("Background", 510, windowHeight - 95);
    text(sliderB.value(), 150, windowHeight - 15- 10);
    text(sliderG.value(), 150, windowHeight - 40- 10);
    text(sliderR.value(), 150, windowHeight - 65 - 10);
    fill(sliderR.value(), sliderG.value(), sliderB.value());
    ellipse(250, windowHeight-50,50, 50);
  }

  fill(sliderR.value(), sliderG.value(), sliderB.value());
  brushSize = sliderSize.value();
  if(mode){
    drawing1();
  } else {
    drawing2();
  }

}

function changeMode(){
  mode = !mode;
  background(sliderBackground.value());
  firstTime = true;
}

function saveX(){
  fill(sliderBackground.value());
  rect(0, windowHeight - 110, windowWidth,100 );
  firstTime = true;
  saveCanvas('myCanvas', 'jpg');

}
