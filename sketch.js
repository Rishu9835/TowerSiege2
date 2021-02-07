const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;

var hexagon, slingShot;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1=new Ground(500,400,250,15)
    platform2=new Ground(925,250,200,15)
    

    box1 = new Box(510,370);
    box2 = new Box(530,370);
    box3 = new Box(550, 370);
    box4 = new Box(480,340);
    box5 = new Box(500,340);
    box6 = new Box(470,370);
    box7 = new Box(450, 370);
    box8 =  new Box(430,370);
    box9 = new Box(460,340);
    box10 = new Box(520,340);
    box11 = new Box(570,370);
    box12 = new Box(540,340);
    box13 = new Box(500,310);
    box14 = new Box(520, 310);
    box15 = new Box(480,310);
    box16 = new Box(500,280);

    box17 = new Box(925,230);
    box18 = new Box(955,230);
    box19 = new Box(985, 230);
    box20 = new Box(895,230);
    box21 = new Box(865,230);
    box22 = new Box(925,200);
    box23 = new Box(955, 200);
    box24 =  new Box(895,200);
    box25 = new Box(925,170);

    hexagon = new Hexagon(180,395);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hexagon.body,{x:180, y:395});
}

function draw(){
    background(25);
    Engine.update(engine);

    fill("white");
    textSize(20);
    text("Drag the hexagonal stone and release it, to launch it towards blocks",200,50);
    textSize(17);
    text("Press 'SPACE' to get second chance",800,550);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    
   ground.display();

    box5.display();
    //log4.display();
   // log5.display();
   slingshot.display();  
    hexagon.display();
   platform1.display();
   platform2.display();
    //log6.display();
      
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(hexagon.body)
    }
}