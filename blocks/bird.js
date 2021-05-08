class Bird{
    constructor(x, y ,r){
        const options = {
            density : 0.2,
            restituition : 0.4,
            friction : 0.6
        }
    this.body = Matter.Bodies.circle(x,y,r,options);
    Matter.World.add(world , this.body);
    // this.r = r;
    // restitution = 2; 
}

display(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    fill("pink")
    strokeWeight(4);
    circle(0, 0, this.r);
    pop();
}
}