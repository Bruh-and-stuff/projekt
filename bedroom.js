cocoSSD = ""
image1 = ""

function preload(){
    image1 = loadImage("image1.png")
}

function setup(){
    canver2 = createCanvas(500, 500)
    canver2.center()

    cocoSSD = ml5.objectDetector("cocossd", modelLoaded)
}

function draw(){
    image(image1,0,0,500,500)
    for(i = 0;i < objects.length;i++){
        fill("#FF0000")
        textSize(20)
        text(objects[i].label,objects[i].x,objects[i].y)

        text(Math.floor((objects[i].confidence)*100)+"%",objects[i].x+100,objects[i].y)

        noFill()
        stroke("#FF0000")
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
}

function modelLoaded(){
    console.log("The model has been lofeeeeeee---### 404: System not found")

    cocoSSD.detect(image1, resulter)
}

function resulter(error, results){
    if(error){
        console.warn(error)
    }
    console.log(results)
    objects = results
}