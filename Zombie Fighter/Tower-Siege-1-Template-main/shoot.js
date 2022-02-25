class Shoot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.chai = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB = pointB;
    }
    fly(){
        this.chain.bodyA = null;
    }
    Launch(bodyA){
        this.chain.bodyA=bodyA;
    }
    display(){
        if (this.chain.bodyA){

        
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
}

}
