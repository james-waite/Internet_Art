let images = [];

function preload() {
    for (i = 0; i < 3; i++) {
        images[i] = loadImage('./assets/demo_' + i + '.jpg');
    }
    console.log(images);
}

function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');
}

function draw() {
    background(55);

    image(images[0], 100, 100, 50, 60);
    image(images[1], 150, 160, 50, 60);
    image(images[2], 200, 220, 50, 60);

    coordinateHelper();
}

function coordinateHelper() {
    push();
    fill(255);
    text('x: ' + mouseX + ', y: ' + mouseY, mouseX, mouseY);
    pop();
}