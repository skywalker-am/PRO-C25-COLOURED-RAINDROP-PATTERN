var raindrops = [];
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

  for(var i = 0 ; i<1000; i++){
    raindrops.push(new Raindrop(random(0,screenWidth), 
    random(0,screenHeight), 15, 15, "green"));
    
    raindrops[i].setCharValue();
  }
}

function draw() {
  background(0);  

  for(var i = 0; i<1000; i++){
    raindrops[i].display();
    raindrops[i].move();
    if(raindrops[i].y > screenHeight){       
      raindrops[i].y = 0;   
    }
    if(raindrops[i].x > screenWidth){
      raindrops[i].x = 0;
    }
  }
}


