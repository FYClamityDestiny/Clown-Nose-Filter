var nose_x = 0;
var nose_y = 0;
function preload(){
clownose = loadImage("https://i.postimg.cc/W3RFj7CQ/1892351.png");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose);
}
function draw(){
image(video,0,0,300,300);
image(clownose,nose_x,nose_y,24,24);
}
function takePicture(){
save("myFilterImage.png");
}
function modelLoaded(){
console.log("Posenet has loaded");
}
function gotPose(results){
if(results.length > 0){
console.log(results);
nose_x = results[0].pose.nose.x - 14;
nose_y = results[0].pose.nose.y - 14;
console.log("nose X is " + nose_x);
console.log("nose Y is " + nose_y);
}

}
