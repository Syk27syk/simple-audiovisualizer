// TEST BALLS
let aPos = 0;
let aSpeed = 5;

// BOUNCING BALLS - defining variables

let ballCount = 100;
let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let r = [];
let g = [];
let b = [];
let ballSize = [];


// AUDIOVISUALIZER - load song works
var song = new Audio('/on_good_terms.mp3')
song.play();
//this doesn't work -- p5.SoundFile = '/on_good_terms.mp3'

function preload() {
    img = loadImage('/bg.jpg')
}

// -----------------------------------------------------------------------//

// P5JS FUNCTION SETUP. all works. 
function setup() {
    getAudioContext().suspend();
    createCanvas(windowWidth, windowHeight);
    frameRate(60);

    //BOUNCING BALLS
    /*Create a for loop that iterates through i until it reaches the ball count value
    Inside the for loop:
    set x and y position to be the center
    set the speeds to be random
    set the size to be random
    set the colors to be random
    TRANSFERRED CODE TO DRAW
    for(let i = 0; i < ballCount; i++) {
        x[i] = width / 2;
        y[i] = height / 2;
        xSpeed[i] = random(-5,5);
        ySpeed[i] = random(-5,5);
        size[i] = random(10,50);
        r[i] = random(0, 256);
        g[i] = random(0, 256);
        b[i] = random(0, 256);
    }
    */
    
    // AUDIOVISUALIZER
    // fast fourier transform object to return array of values for each point of time analyzed
    fft = new p5.FFT()

}

// P5JS FUNCTION DRAW. this works. 
function draw() {
    background(0)
    // ORANGE AND BLUE TEST BALLS
    noStroke();
    fill('blue')
    ellipse(width/2, height/2, 150,150)
    fill('#FF8C00')
    let aPos = 0;
    let aSpeed = 5;
    ellipse(width/2, aPos, 100,100)
    aPos = aPos + aSpeed

    // BOUNCING BALLS
    /*Iterate through a new for loop to change the properties in order to animate the balls
    Inside the for loop:
    - increment the speed for x position, y position;
    - reverse x direction if ball hits left or right sides, reverse y direction if ball hits top or bottom sides;
    - set random R, G, B values; style to have no strokes;
    - draw balls
    */
    let ballCount = 100;
    for(let i = 0; i < ballCount; i++) {
        let x = [];
        let y = [];
        let xSpeed = [];
        let ySpeed = [];
        let r = [];
        let g = [];
        let b = [];
        let ballSize = [];

        //

        x[i] = width / 2;
        y[i] = height / 2;
        xSpeed[i] = random(-5,20);
        ySpeed[i] = random(-5,20);
        ballSize[i] = random(10,50);
        r[i] = random(0, 256);
        g[i] = random(0, 256);
        b[i] = random(0, 256);

        //
        x[i] += xSpeed[i];
        y[i] += ySpeed[i];
        if(x[i] < 0 || x[i] > width) {
            xSpeed[i] *= -1;
        };
        if(y[i] < 0 || y[i] > width) {
            ySpeed[i] *= -1;
        };
        fill(r[i], g[i], b[i]);
        noStroke();
        ellipse(x[i], y[i], ballSize[i], ballSize[i]);
    }
    // the code is not the problem. p5js draw should be refreshing 60fps and it's not. 

  // AUDIOVISUALIZER
    // create variable to store waveform data from fft. calling fft.waveform returns an array with 1024 elements in chrome dev tools
    stroke(255)
    noFill()
    translate(width / 2, height / 2)
    var wave = fft.waveform()

    // I used m and n instead of x and y because x and y have been used by bouncing balls. 
    // the first line is only for the full circle
    for (var t = -1; t <= 1; t +=2) {
        beginShape()
        // i++ works too. i += 0.5 makes it more complex. 
        for (var i = 0; i <= 180; i += 0.5) {
            var index = floor(map(i, 0, 180, 0, wave.length -1))
            var r = map(wave[index], -1, 1, 150, 350)
            var m = r + sin(i) * t
            var n = r + cos(i)
            vertex (m,n)
        }
        endShape()
    }
    /* this is for a line waveform: 
    for (var i = 0; i < width; i++) {
        var index = floor(map(i, 0, width, 0, wave.length))
        var m = i
        var n = wave[index] * 300 + height / 2
        point (m,n)
    */
    /*The following is the semicircle, it should be in degrees, not radians. 
    for (var i = 0; i <= 180; i++) {
        var index = floor(map(i, 0, 180, 0, wave.length -1))
        var r = map(wave[index], -1, 1, 150, 350)
        var m = r + sin(i)
        var n = r + cos(i)
        vertex (m,n)
    }
    endShape()
    */
    /*this is the other half of the circle. note the minus in front of the sine function. 
    beginShape()
     for (var i = 0; i <= 180; i++) {
        var index = floor(map(i, 0, 180, 0, wave.length -1))
        var r = map(wave[index], -1, 1, 150, 350)
        var m = r + -sin(i)
        var n = r + cos(i)
        vertex (m,n)
    }
    endShape()
    */

    // AUDIOVISUALIZER - PARTICLES


}

// AUDIO CONTROLS
function mousePressed() {
    userStartAudio();
    if (song.isPlaying()) {
        song.pause()
        noLoop()
        //loop and noloop makes soundwave freeze when audio pauses
    } else {
        song.play() 
        loop()
    }
}

