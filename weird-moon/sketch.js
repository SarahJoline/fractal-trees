let r;
let factor = 0;

function setup() {
  createCanvas(640, 640);
  r = width / 2 - 16;
}

function getVector(index, total) {
  console.log(index, total);
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  console.log(angle);
  return v;
}

function draw() {
  background(0);
  const total = 200;
  factor += 0.05;

  translate(width / 2, height / 2);
  stroke(255, 150);
  noFill();
  circle(0, 0, r * 2);

  for (let i = 0; i < total; i++) {
    let a = getVector(i, total);
    let b = getVector(i * factor, total);
    line(a.x, a.y, b.x, b.y);
  }
}
