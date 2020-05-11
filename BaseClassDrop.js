class BaseClassDrop{
    constructor(x, y, width, height, dropColor) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.dropColor = dropColor;
      World.add(world, this.body);
    }

    display(){
			fill(this.dropColor);
      push();
      translate(this.body.position.x, this.body.position.y);
    	rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
};