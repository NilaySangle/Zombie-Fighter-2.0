class Chain {

    constructor(bodyA,pointB){
        var options = {

            bodyA : hexa.body,
            pointB : {x:150,y:200},
            stiffness : 0.04,
            length : 10 
    
        }
        this.chain = Constraint.create(options);
     World.add(world, this.chain);
        //this.pointB=pointB;
        //this.pointA=pointA;
    }

    
    display(){
        if(this.chain.bodyA){



        var pointA = this.chain.bodyA.position;
        //var pointB = this.chain.pointB.position;
        strokeWeight(4);
        //line(pointA.x,pointA.y,pointB.x,pointB.y);
        line(10,20,30,40);
        
        }

    }
    /*fly(){

        this.chain.bodyA=null

    }
*/
}