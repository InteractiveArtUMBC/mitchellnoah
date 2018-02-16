var x = 50;
var y = 100;

function setup(){
    createCanvas(600,600);
    frameRate(30);       
}
function draw(){
    background(0);
    x+=10;
if(x > width-30){
    x = 50;
}
stroke(5);
fill(0,255,x);
rect(y,100,50,50);

fill(x,x,255);
rect(x,x,50,50);

fill(255,0,100);
ellipse(300,100,50,50);

fill(80,47,180)
ellipse(300,300,50,50);

fill(230,24,25)
ellipse(300,500,50,50);

}