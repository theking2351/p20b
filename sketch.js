var cat ,catRunning,catImg1,catlastImage
var mouse,mouseTeasing,mouseImg1,mouselastImage;
background,backgroundImg;
function preload() {
    //load the images here
   backgroungImg=loadImage("garden")
    catImg1=loadImage("cat1");
    catlastImage.loadAnimation("cat4");
    mouseImg1=loadImage("mose1");
    mouseLastImage.loadAnimationdImage("mose4");
    catRunning.loadAnimation("cat2,cat3");
    mouseTeasing.loadAnimation("mouse2,mouse3");

}

function setup(){
    createCanvas(1000,800);
background=createSprite(500,500,500,300);
background.addImage(backgroundImg)

cat =createSprite(600,700,50,60);
cat.addImage(catImg1);

mouse=createSprite(200,700,50,60)
mouse.addImage(mouseImg1);
}

function draw() {

    background(255);
     keyPressed();

    //Write condition here to evalute if tom and jerry collide
     if (cat.x-mouse.x<(cat.width-mouse.width)/2) {
         cat.velocityX=0;
        cat.addAnimation("moseLastImage",mouseImg4)
        cat.changeAnimation("mouselastImage")  
       
       
        mouse.addAnimation("mouseLastImage",catImg4)
        cat.changeAnimation("catlastImage")  


     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW) {
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImage2);
    cat.changeAnimation("catRunning")

    mouse.addAnimation("moseTeasing",mouseImage3);
    mouse.changeAnimation("mouseTeasing");
}

}
