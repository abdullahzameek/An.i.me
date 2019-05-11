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
    image(video, 128, 128, 256, 256);
    
}

var base64image = "";

function keyTyped(){
    if (key === ' '){
        console.log("tried to save image");
        var c = get(128, 128, 256, 256);
        c.loadPixels();
        console.log(c);
        base64image = c.canvas.toDataURL();
    }
    if (key === 's'){
        placeImage(base64image);
    }
}

function placeImage(base64image){
    console.log("change image  now");
    var img = document.getElementById("inter");
    img.src = base64image;
}

let model, img, ouputCanvas, count = 0;

//main();

// async function main() {
//     tf.disableDeprecationWarnings();
//     // load model
//     const MODEL_URL = './models/tensorflowjs_model.pb';
//     const WEIGHTS_URL = './models/weights_manifest.json';
//     model = await tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);

//     img = document.getElementById('inter');
//     outputCanvas = document.getElementById('outputCanvas');

//     predict();
// }

// function predict() {
//     // int32, [0, 255], [256, 256, 3]
//     let input_tensor = tf.fromPixels(img);
//     // preprocess: int32, [0, 255], [256, 256, 3]    =>    float, [-1, 1], [1, 256, 256, 3]
//     let preprocessed_tensor = input_tensor.toFloat().div(tf.scalar(127.5)).sub(tf.scalar(1.0)).expandDims();
//     // predict: [-1, 1] => [-1, 1]
//     let output_tensor = model.predict(preprocessed_tensor);
//     // postprocess: float, [-1, 1], [1, 256, 256, 3]   =>   float, [0, 1], [256, 256, 3]
//     let postprocessed_tensor = output_tensor.mul(tf.scalar(0.5)).add(tf.scalar(0.5)).squeeze();
//     // output image to canvas
//     tf.toPixels(postprocessed_tensor, outputCanvas);
// }
