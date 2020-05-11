class Raindrop extends BaseClass{
  constructor(x, y, dropWidth, dropHeight, dropColor){
    super(x, y , dropWidth, dropHeight, dropColor);
	this.velocityX = 0;
	this.velocityY = 20;
	this.dropSize = 10;
	this.char = [];
	this.res;
  }

  setCharValue(){
	var min = 65;
	var max = 90
	var randomCapAlpha =  Math.floor(Math.random()*(max-min+1)+min);

	min = 97;
	max = 122;
	var randomSmallAlpha =  Math.floor(Math.random()*(max-min+1)+min);

	min =48;
	max =57;
	var randomDigit =  Math.floor(Math.random()*(max-min+1)+min);

	min = 32;
	max = 47;
	var randomSpecilchar1=  Math.floor(Math.random()*(max-min+1)+min);

	min = 58;
	max = 64;
	var randomSpecilchar2 =  Math.floor(Math.random()*(max-min+1)+min);

	min = 91;
	max = 96;
	var randomSpecilchar3 =  Math.floor(Math.random()*(max-min+1)+min);

	min = 123;
	max = 126;
	var randomSpecilchar4 =  Math.floor(Math.random()*(max-min+1)+min);
	
	this.char = [randomCapAlpha, randomSmallAlpha, randomDigit,
		randomSpecilchar1, randomSpecilchar2, randomSpecilchar3,
		randomSpecilchar4];

	var len = this.char.length;
	var indexNo = Math.floor(Math.random() * len); 

	this.res = String.fromCharCode(this.char[indexNo]);
  }

  display(){
	super.display();
	textSize(this.dropSize);
	fill("white");
	strokeWeight(5);
	textAlign(CENTER, CENTER);
	text(this.res,super.getX(),super.getY());
  }

  move(){
    super.move();
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