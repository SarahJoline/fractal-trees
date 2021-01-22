let symmetry = 12;
let angle = 360 / symmetry;

let saveButton;
let clearButton;
let slider;
let xoff = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(7, 185, 197);
  translate(width / 2, height / 2);
  saveButton = createButton("save");
  saveButton.mousePressed(saveSnowflake);
  clearButton = createButton("clear");
  clearButton.mousePressed(clearSnowflake);
  slider = createSlider(1, 32, 4, 0.1);
  colorMode(HSB, 255, 255, 255);
}

function saveSnowflake() {
  saveButton("snowflake.png");
}

function clearSnowflake() {
  background(184, 96, 77);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      let hue = noise(xoff) * 255;
      xoff += 0.01;
      stroke(hue, 255, 255, 100);
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);

        //   let d = dist(mx, my, pmx, pmy);
        //   let sw = map(d, 0, 20, 20, 1);
        let sw = slider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
