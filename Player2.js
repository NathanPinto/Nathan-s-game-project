class Player2 {
    constructor(x,y){
        var playerOptions = {
            //restitution: 0.1,
            friction: 0.5,
            
        }
        //this.image = loadImage()
        this.object = Bodies.rectangle(x,y,10,40,playerOptions);
        World.add(world, this.object);
    }
    display(){
       
       rectMode(CENTER);
        rect(this.object.position.x, this.object.position.y,10,40);
        
    }
    changePositionY(){
        console.log(this.object);
        //this.object.velocity.y = - 10;
        Matter.Body.setVelocity(this.object,{x:0,y:-10});
    }
    changePositionX1(){
        Matter.Body.setVelocity(this.object,{x:-2,y: 0});
        //Matter.Body.isSensor = true;
    }
    changePositionX2(){
        Matter.Body.setVelocity(this.object,{x:2,y: 0});
        //Matter.Body.isSensor = true;
    }
}