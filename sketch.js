// this doesn't work but nevermind
/*
window.onload = function () {
    console.log="script file loaded"
}
*/

// load song
var song = new Audio('/on_good_terms.mp3')
song.play();

// p5js function setup
function setup() {
    createCanvas(windowWidth, windowHeight);
    // fast fourier transform object to return array of values for each point of time analyzed
    //fft = new p5.FFT()
}

// p5js function draw
function draw() {
    background(0)
}
/*
    // create variable to store waveform data from fft. calling fft.waveform returns an array with 1024 elements in chrome dev tools
    var wave = fft.waveform()

    for (var i = 0; i < width; i++) {
        var index = floor(map(i, 0, width, 0, wave.length))
        var r = map(wave[index], -1, 1, 150, 150)
        //y = wave[index] = 300 + height / 2
        var x = r + sin(i)
        var y = r + cos(i)
        vertext (x,y)
       //point (x,y)
    }
}
*/
// play song
function mouseClicked() {
    if (song.isPlaying()) {
        song.pause()
    } else {
        song.play()
    }
}

