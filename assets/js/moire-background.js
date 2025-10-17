var img_zoom = 1.3;
var img_zoom_diff = 1.08;

var canvas_size = 840;

var rotation = 0;
var rotation_boundary = 18; // 180/x degree
var rotation_speed = 0.003;

var position = 0;
var position_size = 15;
var position_speed = 0.007;

var pattern = '/images/features/cross_ripple_fine_loss.webp'

function setup() {  
  var parent = document.getElementById('moire-background').parentElement;
  var canvas = createCanvas(windowWidth, parent.offsetHeight);
  canvas.parent('moire-background');
  canvas.style('position', 'absolute');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '0');
  img = loadImage(pattern);
}

function draw() {
  background(0, 43, 54); // Solarized Dark background (#002b36)  
  imageMode(CENTER);
  translate(width / 2, height / 2);

  //drawing the bottom pattern
  tint(255, 77); // 30% opacity (255 * 0.3 = 76.5)
  image(img, 0, 0, img.height * img_zoom * img_zoom_diff, img.height * img_zoom * img_zoom_diff);

  // rotating the top layer
  var angle = PI / rotation_boundary * sin(rotation);
  rotate(angle);
  
  // moving the top layer in a 8-shape
  var x = position_size * cos(position);
  var y = position_size * sin(position) * cos(position);

  // drawing the moving pattern
  tint(255, 77); // 30% opacity (255 * 0.3 = 76.5)
  image(img, x, y, img.height * img_zoom, img.height * img_zoom);

  // updating loop cursors
  rotation = rotation + rotation_speed;
  position = position + position_speed;
}

function windowResized() {
  var parent = document.getElementById('moire-background').parentElement;
  resizeCanvas(windowWidth, parent.offsetHeight);
}
