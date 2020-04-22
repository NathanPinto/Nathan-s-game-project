class Bullet{
    constructor(x, y, width, height) {
        var options = {
            //'isStatic': true,
           
            render : {visible : true},
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // bullet.body.render.visible = true;

       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        
        push();
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
        
      }
      destroy(){
          if(this.body.speed < 3){
              World.remove(world,this.body);
          }
          
      }
}
