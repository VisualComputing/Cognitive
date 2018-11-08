var mld = 20;
var mlx = [100,280];
var mly = [100,200,300];
var sketch2 = function( p ) {
    p.setup = function() {
        var myCanvas = p.createCanvas(400, 400);
        myCanvas.parent( 'MullerLyer_id' );
        p.background(255);
    };

    p.draw = function() {
        p.background(255);
        p.stroke(0);
        p.strokeWeight(4);
        //Horizontal lines
        for(var i = 0; i < mly.length; i++) {
          p.line( mlx[0], mly[i], mlx[1], mly[i] ); 
        }
        //Top line
        p.line( mlx[0], mly[0], mlx[0]+mld, mly[0]+mld );
        p.line( mlx[0], mly[0], mlx[0]+mld, mly[0]-mld );
        p.line( mlx[1], mly[0], mlx[1]-mld, mly[0]+mld );
        p.line( mlx[1], mly[0], mlx[1]-mld, mly[0]-mld );
      
        //Medium line
        p.line( mlx[0], mly[1], mlx[0]-mld, mly[1]+mld );
        p.line( mlx[0], mly[1], mlx[0]-mld, mly[1]-mld );
        p.line( mlx[1], mly[1], mlx[1]+mld, mly[1]+mld );
        p.line( mlx[1], mly[1], mlx[1]+mld, mly[1]-mld );
          
        //Bottom line
        p.line( mlx[0], mly[2], mlx[0]+mld, mly[2]+mld );
        p.line( mlx[0], mly[2], mlx[0]+mld, mly[2]-mld );
        p.line( mlx[1], mly[2], mlx[1]+mld, mly[2]+mld );
        p.line( mlx[1], mly[2], mlx[1]+mld, mly[2]-mld );
      
        if (p.mouseIsPressed == true) {
          p.stroke(255,0,0);
          p.strokeWeight(2);
          p.line(mlx[0], mly[0], mlx[0], mly[2]);
          p.line(mlx[1], mly[0], mlx[1], mly[2]);
        } 
    };
}

p5Man.add(new p5( sketch2, 'MullerLyer_id' ));
