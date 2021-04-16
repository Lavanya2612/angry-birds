class SlingShot{
    constructor(bodyA, pointB){
   var options={
       bodyA : bodyA,
       pointB : pointB,
       length : 10,
       stiffness: 0.04
  }

  this.slingshot= Constraint.create(options)
  this.pointB=pointB
  World.add(world, this.slingshot)
    }

    fly(){
        this.slingshot.bodyA= null
    }
    display(){
        if(this.slingshot.bodyA){
        var pointA=this.slingshot.bodyA.position
        var pointB=this.pointB
        strokeWeight(5)
        stroke('black')
line (pointA.x, pointA.y, pointB.x, pointB.y)}


    }
}