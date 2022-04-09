
var  Sprite,Sprite2,Sprite3,Sprite4,Sprite5,Sprite6
var murudomexico
var imgbola


function preload(){
imgbola=loadImage("bola_chutada_pelo_pele.png")
  }


function setup(){
  createCanvas(700,600)
 
Sprite=createSprite(150,250,50,100)
Sprite.shapeColor = "red"











Sprite2=createSprite(350,250,50,100)
Sprite2.shapeColor = "blue"


Sprite3=createSprite(250,250,50,100)
Sprite3.shapeColor = "green"




Sprite4=createSprite(130,380,100,50)
Sprite4.shapeColor = "blue"


Sprite5=createSprite(340,380,100,50)
Sprite5.shapeColor = "red"


Sprite6=createSprite(500,100,30,30)
Sprite6.shapeColor = "green"
Sprite6.addImage(imgbola)
Sprite6.velocityX = 11
Sprite6.velocityY = 11
Sprite6.scale=0.2
Sprite6.debug= false
Sprite6.setCollider("circle",0,0,100)
murodomexico=createEdgeSprites()


}


function draw(){
 background(0)
 drawSprites()
Sprite6.bounceOff (Sprite5)    
Sprite6.bounceOff(murodomexico)
Sprite6.bounceOff(Sprite2)
Sprite6.bounceOff(Sprite3)
Sprite6.bounceOff(Sprite4)
Sprite6.bounceOff(Sprite)



} 




















































































































































































