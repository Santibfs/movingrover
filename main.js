canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_heigh = 90;

roverX = 10;
roverY = 10;

imagen_de_fondo = "mars.jpg";
imagen_de_rover = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = imagen_de_fondo;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = imagen_de_rover;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag , 0,0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag , roverX , roverY,rover_width, rover_heigh );
}

window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;

    if(keypressed == '37'){
        MovIzq();
    }
    if(keypressed == '38'){
        MovArriba();
    }
    if(keypressed == '39'){
        MovDer();
    }
    if(keypressed == '40'){
        MovAbajo();
    }
}


function MovIzq(){
    if(roverX > 0){
        roverX = roverX-10;
        uploadBackground();
        uploadrover();
    }
}

function MovArriba(){
    if(roverY > 0){
        roverY = roverY-10;
        uploadBackground();
        uploadrover();
    }
}

function MovDer(){
    if(roverX < 700){
        roverX = roverX+10;
        uploadBackground();
        uploadrover();
    }
}

function MovAbajo(){
    if(roverY < 500){
        roverY = roverY+10;
        uploadBackground();
        uploadrover();
    }
}