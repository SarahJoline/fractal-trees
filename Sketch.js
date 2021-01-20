var angle = PI / 4;

var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, TWO_PI, PI / 4, 0);
  slider.position(20, 20);
}

function draw() {
  background(51);
  angle = slider.value();

  translate(windowWidth / 2, height);
  branch(100, 255);
}

function branch(len, strokeColor) {
  stroke(strokeColor);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67, strokeColor - 20);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67, strokeColor - 20);
    pop();
  }
}
