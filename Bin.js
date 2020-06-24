class Bin{
    constructor(){
        var options={
            isStatic:true,
        };

        this.body=Bodies.rectangle(900,200,13,80,options);
        this.width1=13;
        this.height1=80
        World.add(world,this.body);

        this.body2=Bodies.rectangle(900,280,120,13,options);
        this.width2=185;
        this.height2=13
        World.add(world,this.body2);

        this.body3=Bodies.rectangle(1073,200,13,80,options);
        this.width3=13;
        this.height3=80
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var pos2=this.body2.position;
        var pos3=this.body3.position;
        push();
        fill("white");
        strokeWeight(0);
rect(pos.x,pos.y,this.width1,this.height1);
rect(pos2.x,pos2.y,this.width2,this.height2);
rect(pos3.x,pos3.y,this.width3,this.height3);
pop();
    }
}