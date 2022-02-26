// Variables Index
// Buttons
let drawButton;
let resetButton;

let dynamicArc = null;

// Arc HTML Elements
let settingNameHTML;
let settingDescriptionHTML;
let timeHTML;


///hacer variable para extrar el objeto json del archivo

function setup() {
  //reateCanvas(200, 200);
  noCanvas();

  // Select existing html nodes to use with JS
  //buttons
  drawButton = select("#draw-button");
  resetButton = select("#reset-button");
  settingNameHTML = select("#settingNameHTML");
  settingDescriptionHTML = select("#settingDescriptionHTML");
  timeHTML = select("#timeHTML");

  // Call functions that work with mouse presses (clicking on the buttons)
  drawButton.mousePressed(clickedDraw);
  resetButton.mousePressed(clickedReset);

}

function loadJSONFile() {
  // Load the JSON from file
  dynamicArc = loadJSON("content.json", clickedDraw);
}


function arcContent() {

  let settingJSON = dynamicArc.content[0].arc[0].setting;
  let RandomSetting = random(settingJSON);
  //print html elements
  settingNameHTML.html(RandomSetting.name);
  settingDescriptionHTML.html(RandomSetting.description);

  // Time
  let timeJSON = dynamicArc.content[0].arc[1].time;
  let printRandomTime = random(timeJSON);
  timeHTML.html(printRandomTime);
}

// declare functionality of buttons upon being pressed

function clickedDraw() {
  console.log("Draw button has been clicked");
  dynamicArc = loadJSON('content.json', arcContent);
  arcContent();
}

function clickedReset() {
  console.log("Reset button has been clicked");
}
