// So We Are Using p5.js so 3 necessary functions too...

// Important variables:
noseX = 0;
noseY = 0;

difference = 0;

rightWristX = 0;
leftWristX = 0;

// Function Setup
function setup()
{
    video = createCapture(VIDEO);
    video.size(750, 700);
    
    canvas = createCanvas(750, 563);
    canvas.position(957, 136);

    // For Modal Loading!
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

// Function Draw
function draw() 
{
    background("#969A97");

    document.getElementById("square_side").innerHTML = "Width Of The Square Will Be = " + difference + "px";
    fill("#fff");
    stroke("white");
    square(noseX, noseY, difference);
}


function modelLoaded()
{
    console.log("model loaded")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.noseX;
        noseY = results[0].pose.noseY;

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;

        difference = floor( leftWristX - rightWristX);
        console.log(difference);
    }
}