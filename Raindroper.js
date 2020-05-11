class Raindroper extends BaseClassDrop{
  constructor(x, y, dropWidth, dropHeight, dropColor){
		super(x, y , dropWidth, dropHeight, dropColor);
  }

	display(){
		var xDropLines = round((window.innerWidth)/20);
		super.display();
	}
};




/*
var xDropLines = round((window.innerWidth)/20);
for(var i=0; i<xDropLines; i++){
	for(var j=0; j<15; j++){
		stroke(random(0,255),random(0,255),random(0,255));
		this.x[i+1]= this.x[i]+20;
		this.y[j+1]= this.y[j] + random(30,60);
		line(this.x[i+1],this.y[j+1],this.x[i+1],this.y[j+1]+random(10,35));
	}
}
*/