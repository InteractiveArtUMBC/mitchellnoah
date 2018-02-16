
function setup(){
    createCanvas(600,400);
    frameRate(100);
}
function draw(){
    ellipse(200,100,10,10);
    ellipse(300,200,30,30);
}

function squares(x,y){
    translate(x,y);
    push();
    fill(200,100,0);
    rect(100,200,50,50);
    rect(100,100,50,50);
    pop();
}
function circles(x,y){
    translate(x,y);
    push();
    fill(200,100,0);
    rect(100,200,10,10);
    rect(100,100,10,10);
    pop();
}