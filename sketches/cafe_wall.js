// Author: Jairo Suarez
// February 16, 2017
var cWidth = 30; // cell width
var cHeight = 26; // cell height
var linexHeight = 1; // stroke width for horizontal
var lineyHeight = 2; // stroke width for vertical lines
var rows = 9; // number of rows to draw
var canvasWidth = 400; // canvas width

var sketch2 = function(p) {
    p.setup = function() {
        p.createCanvas(canvasWidth, (cHeight + lineyHeight) * rows + lineyHeight);
        p.background('#888');
        p.smooth();
        p.noLoop();
        // draw the cell each time the mouse is moved
        p.mouseMoved = function() {
            p.draw();
        }
    };

    // draw a row of cells
    function drawRow(row) {
        yPos = row * (cHeight + lineyHeight) + lineyHeight;
        numCells = Math.ceil(canvasWidth / cWidth) + 3;
        for (var i = -80; i < numCells; i = i + 1) {
            if (i % 2 == 0) {
                p.fill(0);
            } else {
                p.fill('#fff');
            }
            p.noStroke();
            var pos = row % 4;
            if (pos == 3) pos = 1;
            p.rect(
                i * (cWidth + linexHeight) - pos * p.mouseX / 15 % (2 * cWidth) + 15,
                yPos,
                cWidth,
                cHeight
            );
        }
    }

    // draw the rows
    p.draw = function() {
        p.background('#888');
        for (var i = 0; i < rows; i = i + 1) {
            drawRow(i);
        }
    };
};

p5Man.add(new p5(sketch2, 'cafe_wall_id'));
