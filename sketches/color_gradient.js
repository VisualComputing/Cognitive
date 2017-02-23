// Author: Jairo Suarez
// February 16, 2017
var c1,c2,c3,w,h;

var sketch3 = function(p) {
    p.setup = function() {
        w = 440; // canvas width
        h = 320; // canvas height
        // Here we use [Web Colors](https://en.wikipedia.org/wiki/Web_colors) using the #RRGGBB model
        c1 = "#323232"; // left color
        c2 = "#C7C7C7"; // right color
        c3 = "#787878"; // block color
        p.createCanvas(w,h);
        p.smooth();
        p.noLoop();
    };

    // adapted from: https://p5js.org/examples/color-linear-gradient.html
    // this function draws a left to right gradient interpolating the values between two colors (c1,c2)
    function setGradient(c1, c2) {
        p.noFill();
        // Left to right gradient
        for (var i = 0; i <=  w; i++) {
            var inter = p.map(i, 0, w, 0, 1);
            var c = p.lerpColor(c1, c2, inter);
            p.stroke(c);
            p.line(i, 0, i, h);
        }
    }

    // this sets a listener to the mouse click function and toggles the gradient
    p.mouseClicked = function() {
        if (c2 == "#C7C7C7") {
            c2 = "#323232";
        } else {
            c2 = "#C7C7C7";
        }
        p.draw();
    };

    p.draw = function() {
        setGradient( c1, c2);
        p.noStroke();
        p.fill(c3);
        p.rect(30, 140, 380, 40);
    };
};

var myp5_3 = new p5(sketch3, 'color_gradient_id');
