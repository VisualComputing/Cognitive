function setup() {
  var myCanvas = createCanvas(600, 600);
  myCanvas.parent('mouse_id');
  ellipseMode(CENTER);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 100, 100);
}
