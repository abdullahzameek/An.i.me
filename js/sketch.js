let video;

function setup()
{
    var canvas = createCanvas(512,512);
    canvas.parent('origin');
    video = createCapture(VIDEO);
    video.hide() // hides the html element
    //saveThis = createGraphics(256, 256);

}

function draw()
{   
    background(0); 
    image(video, 128, 0, 256, 256);
    
}

var base64image = "";

function keyTyped(){
    if (key === ' '){
        console.log("tried to save image");
        var c = get(128, 0, 256, 256);
        c.loadPixels();
        console.log(c);
        base64image = c.canvas.toDataURL();
    }
    if (key === 's'){
        placeImage(base64image);
    }
    if (key === 't')
    {
        main();
    }
}


function placeImage(base64image){
    console.log("change image  now");
    var img = document.getElementById("inter");
    img.src = base64image;
}


