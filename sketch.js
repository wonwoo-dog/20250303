let input, slider, button, dropdown;
let isBouncing = false;
let offsets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(10, 10);
  
  slider = createSlider(28, 50, 32);
  slider.position(input.x + input.width + 10, 10);
  
  button = createButton('Start Bouncing');
  button.position(slider.x + slider.width + 10, 10);
  button.mousePressed(toggleBouncing);
  
  dropdown = createSelect();
  dropdown.position(button.x + button.width + 10, 10);
  dropdown.option('第一周');
  dropdown.option('第二周');
  dropdown.option('第三周');
  dropdown.changed(handleDropdownChange);
}

function draw() {
  background(220);
  let textValue = input.value();
  let textSizeValue = slider.value();
  textAlign(LEFT, TOP);
  textSize(textSizeValue);
  
  if (textValue) {
    let repeatedText = textValue.repeat(Math.ceil(width / textWidth(textValue)));
    let lineHeight = textSizeValue * 1.5; // 增加行高
    for (let y = 0; y < height; y += lineHeight) {
      let offsetY = isBouncing ? offsets[y / lineHeight % offsets.length] : 0;
      text(repeatedText, 0, y + offsetY);
    }
  }
  
  if (isBouncing) {
    updateOffsets();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleBouncing() {
  isBouncing = !isBouncing;
  if (isBouncing) {
    button.html('Stop Bouncing');
    initializeOffsets();
  } else {
    button.html('Start Bouncing');
  }
}

function initializeOffsets() {
  offsets = [];
  let lineHeight = slider.value() * 1.5;
  for (let y = 0; y < height; y += lineHeight) {
    offsets.push(random(-5, 5));
  }
}

function updateOffsets() {
  for (let i = 0; i < offsets.length; i++) {
    offsets[i] = sin(frameCount * 0.1 + i) * 5;
  }
}

function handleDropdownChange() {
  let selected = dropdown.value();
  if (selected === '第一周') {
    window.open('https://www.tku.edu.tw/', '_blank');
  } else if (selected === '第二周') {
    window.open('https://www.et.tku.edu.tw/', '_blank');
  }
}
