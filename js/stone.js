class stone
{
	constructor(x,y,r,bodyA,pointB)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2,
			bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:10
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.pointB=pointB;
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.stone=Constraint.create(options);
		World.add(world, this.body);

	}
	fly(){
this.stone.bodyA=null;
	}
	display()
	{
		if(this.stone.bodyA){
			var pointA=this.stone.bodyA.position;
        var pointB=this.pointB;
		strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}