/* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/26605*@* */
/* !do not delete the line above, required for linking your tweak if you upload again */
// Ponzo ilusion
// Author: Mario Ponzo
// August 23, 2017
// Ponzo, M.(1911)
// "Intorno ad alcune illusioni nel campo delle sensazioni tattili sull'illusione di Aristotele e fenomeni analoghi". Archives Italiennes de Biologie.
// Sketch made by Neill Giraldo : http://neillgiraldo.github.io/


var sketch1 = function( p ) {
    p.setup = function() {
        p.createCanvas(550, 400);
        p.smooth();               // antialias lines
    };

    p.draw = function() {

        //style
        p.background(180);
        p.strokeWeight(0);
        
        p.fill(0);      // medium weight lines 

        // Vertical/diagonal black thick lines
        // downleft,upleft,upright, downright
        p.quad(85,400,255,0,260,0,115,400,5);
        p.quad(440,400,280,0,285,0,470,400,5);

        //style
        p.stroke(0);
        p.strokeWeight(0);
        p.fill(0);

        // Horizontal Black lines

        startx = 250;
        starty = 0.2;
        startwx = 40;
        startwy = 0.5;
        index = 1;
        while(starty < 400){
            p.rect(startx,starty,startwx,startwy,5);
            startx = startx - (starty * 1.35 -starty)*0.65;
            starty = starty * Math.pow(index,0.1);
            startwy = startwy + (starty * 1.6 -starty)*0.015;
            startwx = startwx + (starty * 1.4 -starty)*0.85;
            index = index + 1;
        }

        p.fill(255, 255, 0);

        // yellow strips
        p.rect(198,40,145,10);
        p.rect(198,330,145,10);

        p.fill(0);
        
        p.line(200,550,250,0);
        p.line(300,550,270,0);

        p.stroke(0);
        p.strokeWeight(5);       // medium weight lines 
        
        // red strips
        if( p.mouseIsPressed){
            p.fill("#FF0000");
            p.strokeWeight(0); 

            p.rect(198,0,3,400);
            p.rect(343,0,3,400);
        }

        // four white lines
        p.stroke(255);
        p.strokeWeight(10);
        p.line(0,0,0,400);
        p.line(0,0,550,0);
        p.line(0,400,550,400);
        p.line(550,0,550,400);

        p.filter("blur",1);

    };
};

var myp5_1 = new p5(sketch1, 'ponzo_id');