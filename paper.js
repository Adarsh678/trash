class paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.1,
            'isStatic':false,
            'friction':1,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
     
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        fill("red");
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}