// Variables Index
// Buttons
let drawButton;
let resetButton;

// variable to hold JSON values
let dynamic = null;

// Arc HTML Elements
let settingNameHTML;
let settingDescriptionHTML;
let timeHTML;
let terrainHTML;
let objectHTML;
let moodHTML;
let frontCardsHTML;
let backCardsHTML;

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
  terrainHTML = select("#terrainHTML");
  objectHTML = select("#objectHTML");
  moodHTML = select("#moodHTML");
  frontCardsHTML=select("#cards-front");
  backCardsHTML=select("#cards-back");

  // Call functions that work with mouse presses (clicking on the buttons)
  drawButton.mousePressed(loadJSONFile);
  resetButton.mousePressed(clickedReset);
}

function loadJSONFile() {
  // Load the JSON from file/ react to Draw button click
  dynamic = loadJSON("content.json", onFileload);
  console.log("Draw button has been clicked");

}

function onFileload() {
  randomArc();
  randomTerrain();
  randomObject();
  randomMood();
  frontCardsHTML.elt.style.display="none";
  // backCardsHTML.show();
  // drawButton.hide();
  resetButton.show();

}

function randomArc() {
  let settingJSON = dynamic.content[0].arc[0].setting;
  let randomSetting = random(settingJSON);
  //print html elements
  settingNameHTML.html(randomSetting.name);
  settingDescriptionHTML.html(randomSetting.description);

  // Time
  let timeJSON = dynamic.content[0].arc[1].time;
  let randomTime = random(timeJSON);
  timeHTML.html(randomTime);
}

function randomTerrain() {
  let terrainJSON = dynamic.content[1].terrain;
  let randomTerrain = random(terrainJSON);
  terrainHTML.html(randomTerrain);
  console.log("Terrain function was summoned");
}
function randomObject() {
  let objectJSON = dynamic.content[2].object;
  let randomObject = random(objectJSON);
  objectHTML.html(randomObject);
  console.log("Object function was summoned");
}
//function randomMood() {}
function randomMood() {
  let moodJSON = dynamic.content[3].mood;
  let randomMood = random(moodJSON);
  moodHTML.html(randomMood);
  console.log("Mood function was summoned");
}

// test declare functionality of buttons upon being pressed
function clickedReset() {
  console.log("Reset button has been clicked");
  frontCardsHTML.show();
  // backCardsHTML.hide();
  // drawButton.show();
  // resetButton.hide();

}

function toggleCards() {
  if (frontCardsHTML.elt.style == "none") {
    
  }
}
