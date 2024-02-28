let ellipseDiameter = 50;
let ellipseRadius = ellipseDiameter / 2;
let positionX = 300;
let positionY = 200;
let speedX = 5;
let speedY = 15;
let lineX = 300;
let lineY = 200;

function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');
    
}

function draw() {
    background(55);
    
    if (positionX > width - ellipseRadius || positionX < ellipseRadius) {
        // speedX = speedX * -1;
        speedX *= -1;
    }
    if (positionY > height - ellipseRadius || positionY < ellipseRadius) {
        speedY = speedY * -1;
    }

    positionY = positionY + speedY;
    positionX = positionX + speedX;

    lineX = lineX + random(-1, 1);
    lineY = lineY + random(-1, 1);
    console.log("x:", lineX, "Y:", lineY);
    
    noStroke();
    fill(random(150, 255), 155, 25);
    rect(30, 20, 55);

    stroke(0, 255, 0);
    noFill();
    strokeWeight(1);
    ellipse(positionX, positionY, ellipseDiameter);

    stroke(0, 0, 255);
    strokeWeight(4);
    line(0, 0, lineX, lineY);

}