let video;

function setup()
{
    var canvas = createCanvas(512,512);
    canvas.parent('origin');
    video = createCapture(VIDEO);
    video.hide() // hides the html element
}

function draw()
{   
    fill(0);
    rect(0,0,512,512);
}