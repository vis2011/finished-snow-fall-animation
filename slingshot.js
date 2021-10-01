class Slingshot2 {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 50,
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }
attach(body){
  this.sling.bodyA=body
}
  fly(){
    this.sling.bodyA=null
  }
    display(){
      strokeWeight(5)

      if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
  }

