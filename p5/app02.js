let array = ['hello', 'world', 'first', 'array', 'fifth', 'sixth'];

let lineHeight = [150, 245, 56, 3, 172, 42];

let color = ['#00ff88']

// let lineStart = 50;

function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');

    background(55);

    array.pop();
    // starting value - exit condition - increment value
    for(i=0; i < array.length; i++) {
        console.log(array[i]);
    }

    // fill(color[0])
    // for(i=50; i<550; i+=10) {
    //     for(j=0; j<lineHeight.length; j++) {
    //         line(i, 50, i, lineHeight[j])
    //     }
    // }

}

function draw() {
}