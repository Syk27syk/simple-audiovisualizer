// BOUNCING BALLS - defining variables
let ballCount = 100;
let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let r = [];
let g = [];
let b = [];
let size = [];

// AUDIOVISUALIZER - load song works
var song = new Audio('/on_good_terms.mp3')
song.play();
//this doesn't work -- p5.SoundFile = '/on_good_terms.mp3'

// -----------------------------------------------------------------------//

// P5JS FUNCTION SETUP. all works. 
function setup() {
    getAudioContext().suspend();
    createCanvas(windowWidth, windowHeight);

    //BOUNCING BALLS
    /*Create a for loop that iterates through i until it reaches the ball count value
    Inside the for loop:
    set x and y position to be the center
    set the speeds to be random
    set the size to be random
    set the colors to be random
    */
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
    
    // AUDIOVISUALIZER
    // fast fourier transform object to return array of values for each point of time analyzed
    //fft = new p5.FFT()


}

// P5JS FUNCTION DRAW. this works. 
function draw() {
    background(0)
    // ORANGE AND BLUE TEST BALLS
    noStroke();
    fill('blue')
    ellipse(width/2, height/2, 150,150)
    fill('#FF8C00')
    ellipse(width/2, height/2, 100,100)

    // BOUNCING BALLS
    /*Iterate through a new for loop to change the properties in order to animate the balls
    Inside the for loop:
    - increment the speed for x position, y position;
    - reverse x direction if ball hits left or right sides, reverse y direction if ball hits top or bottom sides;
    - set random R, G, B values; style to have no strokes;
    - draw balls
    */
    for(let i = 0; i < ballCount; i++) {
        let ballCount = 100;
        let x = [];
        let y = [];
        let xSpeed = [];
        let ySpeed = [];
        let r = [];
        let g = [];
        let b = [];
        let size = [];

        //

        x[i] = width / 2;
        y[i] = height / 2;
        xSpeed[i] = random(-5,5);
        ySpeed[i] = random(-5,5);
        size[i] = random(10,50);
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
        ellipse(x[i], y[i], size[i], size[i]);
    }

  // AUDIOVISUALIZER
    // create variable to store waveform data from fft. calling fft.waveform returns an array with 1024 elements in chrome dev tools
    var wave = fft.waveform()

    for (var i = 0; i < width; i++) {
        var index = floor(map(i, 0, width, 0, wave.length))
        var r = map(wave[index], -1, 1, 150, 150)
        //y = wave[index] = 300 + height / 2
        var x = r + sin(i)
        var y = r + cos(i)
        vertex (x,y)
       //point (x,y)
    }
}

// AUDIO CONTROLS
function mousePressed() {
    userStartAudio();
}

