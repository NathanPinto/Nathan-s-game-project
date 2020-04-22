const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var player1, bullet;
var backgroundImg;
var bulletNO = 1;



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(700,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(350,485,700,10);

    player1 = new Player1(250,150);
    player2 = new Player2(450,150)

    box1 = new Box(100,400,80,10);
    box2 = new Box(600,400,80,10);
    box3 = new Box(350,350,120,10);
    box4 = new Box(70,300,150,10);
    box5 = new Box(630,300,150,10)
    box6 = new Box(40,310,120,10)
    box7 = new Box(660,310,120,10);
    box8 = new Box(350,250,400,10);
    box9 = new Box(350,170,220,10);
    box10 = new Box(350,140,50,50);
    box11 = new Box(190,100,60,10);
    box12 = new Box(510,100,60,10);
    box13 = new Box(40,150,80,10);
    box14 = new Box(660,150,80,10);

    

    //Matter.Body.setPosition(bullet.body,{x: player1.object.position.x -5 , y: player1.object.position.y});
}

function draw(){
    background('black');
    Engine.update(engine);



//console.log(bullet.body);

    player1.display();
    player2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    ground.display();

    

    

    if(key === 'z'){
        bullet = new Bullet(200,180,10,10)
        Matter.Body.setVelocity(bullet.body,{x: 2, y: 0});
        bullet.display()
    }
    
    //console.log(player1.body.position.x);
    

}

function keyTyped(){
    if (key === "w"){
       // console.log("hello");
        player1.changePositionY();
    }
    else if (key === "a"){
        player1.changePositionX1();
    }
    else if (key === "d"){
        player1.changePositionX2();
    }

    
}
function keyPressed(){
    if(keyCode === UP_ARROW){
    // console.log("hello");
     player2.changePositionY();
    }
    else if (keyCode === LEFT_ARROW){
     player2.changePositionX1();
    }
    else if (keyCode === RIGHT_ARROW){
     player2.changePositionX2();
    }
}

function keys(){
     
       
        
        //bullet = new Bullet(200,200, 2, 2);
        //console.log(bullet.body);
        //Matter.Body.setPosition(bullet.body,{x : mouseX, y: mouseY});
        //bullet.display();
}