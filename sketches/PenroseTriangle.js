//Author: Edwin Alexander Bohorquez Gamba

var color1 = '#FF0000';
var color2 = '#00FF00';
var color3 = '#0000FF';
var aux = '';

var sketch = function( p ) {

    p.setup = function() { 
        p.createCanvas(600, 390);
        p.smooth();                              
    };                
 
    p.mouseClicked = function() {                
        aux = color1;
        color1 = color3;
        color3 = color2;                
        color2 = aux;                
    };

    p.draw = function() {                    
        p.background(255);          
        p.strokeWeight(3);                

        p.beginShape();        
        p.fill(color1);        
        p.vertex(270, 25);
        p.vertex(108, 316);
        p.vertex(137, 368);
        p.vertex(271, 129);
        p.vertex(346, 264);
        p.vertex(405, 264);
        p.vertex(270, 25);                
        p.endShape();

        p.beginShape();
        p.fill(color2);
        p.vertex(270, 25);
        p.vertex(329,25);
        p.vertex(491,316);
        p.vertex(228,316);
        p.vertex(257,264);
        p.vertex(405,264);
        p.vertex(270, 25);
        p.endShape();
        
        p.beginShape();
        p.fill(color3);
        p.vertex(300, 182);
        p.vertex(228,316); 
        p.vertex(491,316);
        p.vertex(467, 368);
        p.vertex(137, 368);             
        p.vertex(271, 129);
        p.vertex(300, 182);
        p.endShape();        
    
    };
};

var myp5 = new p5(sketch, 'PenroseTriangle_id');
