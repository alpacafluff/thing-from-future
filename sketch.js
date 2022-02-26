// Variables Index

let colBlack;
/* 
// Colors
NEED TO FIX THIS WAS THROWING ERRORS, RN HARDCODING COLORS
    // Neutrals 
  ​     //var colWhite;
  ​     //var colLightestGray;
  ​     //var collightGray;
  ​     //var colgray;
  ​     //var coldarkGray;
  ​     //var darkestGray;
  ​     //var colBlack;

    ​ // Content Colors
    ​   // Arc 
    ​     //var colArcLightest;
    ​     //var colArcLight;
    ​     var colArcIntense;
    ​     //var colArcDark;

    ​   // Terrain 
    ​     //var colTerrainLightest;
    ​     //var colTerrainLight;
    ​     //var colTerrainIntense;
    ​     //var colTerrainDark;

    ​// Object 
    ​     //var colObjectLightest;
    ​     //var colObjectLight;
    ​     var colObjectIntense;
    ​     //var colObjectDark;
                    
    ​ // Mood 
    ​     //var colMoodLightest;
    ​     //var colMoodLight;
    ​     // var colMoodIntense;
    ​     //var colMoodDark;

  */

  // Buttons
  let arcButton;
  let terrainButton;
  let objectButton;
  let moodButton;
  let captureButton;
  let resetButton;


  //Cards
  // var arcCard;
  // Draw Result
  // var arcResult;

  ///hacer variable para extrar el objeto json del archivo


function setup() {

colBlack = color('#000000');

/*
//assign color variables
NEED TO FIX THIS WAS THROWING ERRORS, RN HARDCODING COLORS
​           // Neutrals 
​            //white = color('#FFFFFF');
​            //lightestGray = color('#F5F4F4');
​            //lightGray = color('#E5E4E4');
​            //gray = color('#A1A1A1');
​            //darkGray = color('#646161');
​            //darkestGray = color('#2D2B2B');
​            //black = color('#000000');

​            // Content 
​                // Arc 
​                //arcLightest = color('#F0F4F4');
​                //arcLight = color('#A6BFBA');
​                arcIntense = color('#6B948D');
​                //arcDark = color('#405954');
​              
​                // Terrain 
​                //terrainLightest = color('#EEEFF6');
​                //terrainLight = color('#9B9ECA');
​                terrainIntense = color('#585EA7');
​                //terrainDark = color('#353864');

​                // Object 
​                //objectLightest = color('#FEE7F0');
​                //objectLight = color('#FA94BF');
​                objectIntense = color('#DB0B62');
​                //objectDark = color('#920741');
               
​                // Mood 

​                //moodLightest = color('#F6EEEF');
​                //moodLight = color('#C18A8D');
​                moodIntense = color('#A7585D');
​                //moodDark = color('#643538');

*/

// temporary canvas for button assignment test

createCanvas(200, 200, 0, 0);
background(colBlack);

// Select existing nodes to use with JS
//buttons
arcButton = select('#arc-button');
terrainButton = select('#terrain-button');
objectButton = select('#object-button');
moodButton = select('#mood-button');
captureButton = select ('#capture-button');
resetButton = select ('#reset-button');
//cards
//arcCard= select('#arc-card');

//draw results
//arcResult= select('arc-result;');


// Call functions that work with mouse presses (clicking on the buttons)

arcButton.mouseClicked(clickedArc);
terrainButton.mouseClicked(clickedTerrain);
objectButton.mouseClicked(clickedObject);
moodButton.mouseClicked(clickedMood);
captureButton.mouseClicked(clickedCapture);
resetButton.mouseClicked(clickedReset);


}

// declare functionality of buttons upon being pressed

function clickedArc () {

//button test: create a rect 100, 100, 50, 50 color with intense hue of this thematic shade
  fill('#6B948D');
  noStroke();
  rect(0, 0, 100, 100);


/*later: 
change card color to intense hue
change text color (all) to white
hide button
reveal 'draw-result' textbook
dynamically present content from list in a randomized way
*/

}

function clickedTerrain () {

//button test: create a rect 100, 100, 50, 50 color with intense hue of this thematic shade
  fill('#585EA7');
  noStroke();
  rect(100, 0, 100, 100);

/*later: 
change card color to intense hue
change text color (all) to white
hide button
reveal 'draw-result' textbook
dynamically present content from list in a randomized way
*/

}

function clickedObject () {

//button test: create a rect 100, 100, 50, 50 color with intense hue of this thematic shade
  fill('#DB0B62');
  noStroke();
  rect(0, 100, 100, 100);

/*later: 
change card color to intense hue
change text color (all) to white
hide button
reveal 'draw-result' textbook
dynamically present content from list in a randomized way
*/

}

function clickedMood () {

//button test: create a rect 100, 100, 50, 50 color with intense hue of this thematic shade
  fill('#A7585D');
  noStroke();
  rect(100, 100, 100, 100);

/*later: 
change card color to intense hue
change text color (all) to white
hide button
reveal 'draw-result' textbook
dynamically present content from list in a randomized way
*/

}

function clickedCapture () {
  fill('white');
  ellipse(60, 20, 20, 20);
}

function clickedReset () {
  fill(colBlack);
  rect(0, 0, 200, 200);

}

