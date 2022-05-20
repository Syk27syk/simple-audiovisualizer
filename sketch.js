// BOUNCING BALLS - defining variables
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
    // fast fourier transform object to return array of values for each point of time analyzed
    //fft = new p5.FFT()


}

// p5js function draw. this works. 
function draw() {
    background(0)
    noStroke();
    fill('#FF8C00')
    ellipse(width/2, height/2, 100,100)
  
    // TODO: Iterate through a new for loop to change the properties in order to animate the balls
  for(let i = 0; i< ballCount; i++){
    // Inside the for loop:
    // TODO: Increment speed for x position
      x[i] += xSpeed[i];

    // TODO: Increment speed for y position
      y[i] += ySpeed[i];
    
    // TODO: Reverse x direction if ball hits left or right sides
    if(x[i] < 0 || x[i] > width) {
      xSpeed[i] *= -1;
    }

    // TODO: Reverse y direction if ball hits top or bottom sides
    if(y[i] < 0 || y[i] > width) {
      ySpeed[i] *= -1;
    }

    // TODO: Set random R, G, B values
    fill(r[i], g[i], b[i]);

    // TODO: Style to have no strokes
    noStroke();

    // TODO: Draw the bouncing balls
    ellipse(x[i], y[i], size[i], size[i]);
  }

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

// play song
function mousePressed() {
    userStartAudio();
}

