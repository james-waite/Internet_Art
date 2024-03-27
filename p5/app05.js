function preload() {
    // preload 
    data = loadJSON('./data.json');
}

function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');
    console.log(data);
    console.log(data.object.currentYear);
}

function draw() {
    // draw
    background(55);
    fill(255);
    text(data.object.greeting, width/2, height/2);
}