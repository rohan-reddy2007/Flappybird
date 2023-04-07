var bg,bgImg
var bottomGround, topGround,bird,birdImg,obstacleTop,obsTop1,obsTop2
var obstacleBottom,obsBottom1,obsBottom2,obsBottom3
var gameOver,gameoverImg,restart,restartImg
var score=0
var PLAY=1
var END=0
var gameState=PLAY


function preload(){
    bgImg=loadImage("assets/bg.png")
    birdImg=loadAnimation("assets/bird.gif")
    obsTop1=loadImage("assets/obsTop1.png")
    obsTop2=loadImage("assets/obsTop2.png")
    obsBottom1=loadImage("assets/obsBottom1.png")
    obsBottom2=loadImage("assets/obsBottom2.png")
    obsBottom3=loadImage("assets/obsBottom3.png")
    gameOverImg=loadImage("assets/gameOver.png")
    restartImg=loadImage("assets/restart.png")
}
function setup(){
    createCanvas(400,400)
    bg=createSprite(165,485,1,1)
    bg.addImage(bgImg)
    bg.scale=1.3

    bottomGround=createSprite(200,390,800,20)
    bottomGround.visible=false

    topGround= createSprite(200,10,800,20)
    topGround.visible=false

    bird=createSprite(100,200,20,50)
    bird.addAnimation("bird",birdImg)
    bird.scale=0.5

}
function draw(){
    drawSprites()
}