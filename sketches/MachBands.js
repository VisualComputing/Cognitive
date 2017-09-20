//Author: Edwin Alexander Bohorquez Gamba

var height_rect = 70;

var sketch = function( p ) {

    p.setup = function() {
        p.createCanvas(600, 400);
        p.smooth();                            
    };                

    p.mouseMoved = function() {        
        var dy = p.mouseY - p.pmouseY;
        if( dy < 0 ){        
            height_rect -= 10;    
        }else{
            if( dy > 0 ){                
                height_rect += 10;      
            }
        }                 
    };

    p.draw = function() {                    
        p.background(255);         
        if( height_rect < 35 )
            height_rect = 35;
        if( height_rect > 70 )
            height_rect = 70;
        p.noStroke();        
        p.fill(66,66,66);
        p.rect(200,20,200,height_rect);
        p.fill(86,86,86);
        p.rect(160,90,280,height_rect);
        p.fill(122,122,122);
        p.rect(120,160,360,height_rect);
        p.fill(152,152,152);
        p.rect(80,230,440,height_rect);
        p.fill(182,182,182);
        p.rect(40,300,520,height_rect);                
    };
};

var myp5 = new p5(sketch,'MachBands_id');
