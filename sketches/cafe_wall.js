// Author: Jairo Suarez
// February 16, 2017
var cWidth = 30;
var cHeight = 26;
var linexHeight = 1;
var lineyHeight = 2;
var rows = 9;

var sketch2 = function(p) {
    p.setup = function() {
        p.createCanvas(400, (cHeight + lineyHeight) * rows + lineyHeight);
        p.background('#888');
        p.strokeWeight(3);
        p.smooth();
        p.noLoop();
    };

    function drawRow(row) {
        yPos = row * (cHeight + lineyHeight) + lineyHeight;
        numCells = Math.ceil(400 / cWidth) + 3;
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

    p.mouseMoved = function() {
        p.draw();
    };

    p.draw = function() {
        p.background('#888');
        for (var i = 0; i < rows; i = i + 1) {
            drawRow(i);
        }
    };
};

var myp5_2 = new p5(sketch2, 'cafe_wall_id');
