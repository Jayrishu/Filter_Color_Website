function preload(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(350, 350);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video, 0,0, 640, 480)
    tint(tint_color);
}
function take_snapshot(){
    save('Selfie.png');
}
function apply(){
    tint_color = document.getElementById("color_input").value;
}