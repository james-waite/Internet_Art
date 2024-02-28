function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');

    background(55);
    makeFace(300, 200, 0, 0, 255);
    makeFace(200, 200);
    makeFace(400, 200);

}

function draw() {}

function makeFace(xPos, yPos, eyeR, eyeB, eyeG) {
    // face shape
    ellipse(xPos, yPos, random(70, 120), random(70, 120));
    eyes(xPos, yPos, eyeR, eyeB, eyeG);
    mouth(xPos, yPos);
}

function eyes(xPos, yPos, eyeR, eyeB, eyeG) {
   // eyes
   let eyeWidth = random(10, 20);
   let eyeDistance = random(5, 20);
   push();
   fill(eyeR, eyeB, eyeG);
   ellipse(xPos-eyeDistance, yPos-eyeDistance, eyeWidth);
   ellipse(xPos+eyeDistance, yPos-eyeDistance, eyeWidth);
   pop();
}

function mouth(xPos, yPos) {
    const mW = mouthWidth(xPos);
    console.log(mW);
    // mouth
    line(xPos-mW, yPos+20, xPos+mW, yPos+20);
}

function mouthWidth(xPos) {
    return (xPos/10) - random(20); // computes and returns the value
}