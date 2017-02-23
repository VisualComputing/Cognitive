var sketch4 = function( p ) {
    p.setup = function() {
        var myCanvas = p.createCanvas(800, 700);
        myCanvas.parent( 'Zollner_id' );
        p.background(255);
    };

    p.draw = function() {
      p.background(255);
      p.noFill();
      p.stroke(0);
      p.strokeWeight(12.5);
      p.rect(100,100, 600, 500);
      makeParallelLines();
      if( !p.mouseIsPressed ) {
        makeIlussionLines();
      }
      cleaner();
    };

    function makeParallelLines( ) {
      p.strokeWeight(15);
      p.strokeCap('SQUARE');
      var x = [100,200];
      var y = [500, 600];
      var d = 100;
      
      for(var i = 0; i < 10; i++) {
        p.line(x[0],y[0]-i*d, x[1]+i*d,y[1]);
      }
    }


    function makeIlussionLines() {
      makeHorizontalLines();
      makeVerticalLines();
    }

    function makeHorizontalLines() {
      var qx = [170, 230, 215, 155];
      var qy = [600,600,585,585];
      p.strokeWeight(1);
      p.fill(0);
      for(var i = 0; i < 5; i++) {
        for(var j = 0; 100 <= qx[0]+(200*i)-(j*30); j++) {
          p.quad(qx[0]+(200*i)-(j*30), qy[0]-(j*30), qx[1]+(200*i)-(j*30), qy[1]-(j*30), qx[2]+(200*i)-(j*30), qy[2]-(j*30), p.max(100,qx[3]+(200*i)-(j*30)), qy[3]-(j*30));
        }
      }
      
    }

    function makeVerticalLines() {
      var qx = [100,100,115,115];
      var qy = [430, 370, 385, 445];
      p.strokeWeight(1);
      p.fill(0);
      for(var i = 0; i < 5; i++) {
        for(var j = 0; 610 >= qy[3]+(j*30)-(200*i); j++) {
          p.quad(qx[0]+(j*30), qy[0]+(j*30)-(200*i), qx[1]+(j*30), qy[1]+(j*30)-(200*i), qx[2]+(j*30), qy[2]+(j*30)-(200*i), qx[3]+(j*30), qy[3]+(j*30)-(200*i));
        }
      }
    }

    function cleaner() {
      p.fill(255);
      p.noStroke();
      p.rect(0,0,650,94);
      p.rect(706,100,200,600);
    }


}

var myp5_4 = new p5( sketch4, 'Zollner_id' );


