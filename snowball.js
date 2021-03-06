class snowball{
    constructor(x,y){

         this.body=Bodies.rectangle(x,y,width,height);
         this.image=loadImage("snowball.png");
         World.add(world,this.body);
         this.x=x
         this.y=y
        
    }
    
    updateY(){     
        if(this.body.position.y > height){
    
          Matter.Body.setPosition(this.body, {x:random(0,1200), y:random(0,620)})
        }
    }
    
    display(){
        var pos=this.body.position;
    
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
        pop();
    }
    
    }