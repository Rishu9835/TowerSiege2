class Box{
   
  constructor(x,y){

      var options={
        restitution:0.5,
        friction : 1.0,
        density : 0.5,
      }
    this.body=Bodies.rectangle(x,y,30,50,options);
    this.width=30;
    this.height=50;
    this.Visiblity=255;
     World.add(world,this.body);
  }

  display(){
    //console.log(this.body.speed)
    if (this.body.speed<8){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);  

      rectMode(CENTER);
      fill("lightblue");
      stroke("black");
      strokeWeight("2");
      rect(0,0,this.width,this.height);
      pop();
    }
    else {
      World.remove(world,this.body);
      push()
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity);
      //image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
    }
  }
      

  }


