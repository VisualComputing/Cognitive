/* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/26605*@* */
/* !do not delete the line above, required for linking your tweak if you upload again */
// Scintillating Grid 
// Author: Rupert Russell
// October 2, 2010
// Schtauf, M., Lingelbach, B., Wrist, E.R. (1997)
// The scintillating grid illusion. Vision Research,
// 37, 1033-1038.
// JS port (p5.js 'instance mode') by Jean Pierre Charalambos

function setup() {
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent('scintillating_id');
    strokeWeight(3);        // medium weight lines
    smooth();               // antialias lines
    stroke(100, 100, 100);  // dark grey colour for lines
    noLoop();

}

function draw() {
    background(0);          // black background
    var step = 25;          // grid spacing

    //vertical lines
    for (var x = step; x < width; x = x + step) {
        line(x, 0, x, height);
    }

    //horizontal lines
    for (var y = step; y < height; y = y + step) {
        line(0, y, width, y);
    }

    // Circles
    ellipseMode(CENTER);
    stroke(255, 255, 255);  // white circles
    for (var i = step; i < width -5; i = i + step) {
        for (var j = step; j < height -15; j = j + step) {
            strokeWeight(6);
            point(i, j);
            strokeWeight(3);
        }
    }
}