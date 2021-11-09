var trilhaImg, meninoImg;
var tirlha,menino;

function preload(){
  //imagens pré-carregadas
  trilhaImg = loadImage("path.png");
  meninoImg = loadAnimation("Jake1.png", "Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  //crie os sprites aqui
  trilha = createSprite(200,200);
  trilha.addImage(trilhaImg);
  trilha.velocityY = 4;
  trilha.scale = 1.2;
  
  menino = createSprite(90,350);
  menino.addAnimation("correndo",meninoImg);
  
  limiteDireito = createSprite(410,0,100,800);
  limiteDireito.visible = false;
  
  limiteEsquerdo = createSprite(0,0,100,800);
  limiteEsquerdo.visible = false;
  
}

function draw() {
  background(0);
  
  
  
  if(trilha.y > 400){
    trilha.y = height/4;
  }
  
  menino.x = mouseX;
  menino.collide(limiteEsquerdo);
  menino.collide(limiteDireito);
  
  
  
  drawSprites();

}
