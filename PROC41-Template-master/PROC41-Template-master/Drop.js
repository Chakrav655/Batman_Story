class Drop{
    constructor(x,y) {
       
        this.body = Bodies.circle(x,y,10,10);

        this.radius=10;    
        World.add(world, this.body);
    }
    update(){
            if (this.body.position.y>800){                
                Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)}) 
            }
        }
        
      
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("lightblue")
        ellipse(this.body.position.x,this.body.position.y,10,10);
        pop();
      }
}