class BaseClass{
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }

    display(){
      fill("green");
    	rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
    }

    getX(){
      return this.x;
    }

    getY(){
      return this.y;
    }
    move(){
      this.y = this.y + this.velocityY;
    }
};