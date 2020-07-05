var base1,base2;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;






function setup() {
  createCanvas(800,800);

  base1 = createSprite(290, 200, 180, 10);
//level 2
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
//level 3
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
//top
  block16 = new Block(390,155,30,40);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}