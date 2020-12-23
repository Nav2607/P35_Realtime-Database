var ball;
var database;
var position;

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    var positionref = database.ref("Ball/Position")
positionref.on("value",readData)
    ball = createSprite(10,10,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/Position").set({
        x:position.x + x,
        y:position.y + y,
    })
}

function readData(data){
    position = data.val();
    ball.x = position.x 
    ball.y = position.y
}