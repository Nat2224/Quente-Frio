
let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(25, 5, 36);
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  let distancia;
  distancia = dist(mouseX,mouseY,x,y);
  circle(mouseX, mouseY, distancia);
  fill  (65, 105, 225)
  //circle(x, y, 10);

  if (distancia < 10) {
    text("Você encontou!", 200, 200);
    noLoop();
  }
}
