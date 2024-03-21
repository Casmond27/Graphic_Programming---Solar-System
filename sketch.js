var speed;

function setup() {
    createCanvas(900, 700);  
}

function draw() {
    background(0);
    speed = frameCount;
          
    push();
    translate(width/2, height/2);
    rotate(radians(speed/3));
    celestialObj(color(255,150,0), 200); // SUN
    
    
    rotate(radians(speed));
    translate(300, 0);
    rotate(radians(speed));
    celestialObj(color(0,0,255), 80); // Earth

    
    push();
    rotate(radians(-speed*2));
    translate(100,0);
    rotate(radians(-speed*2));
    celestialObj(color(255,255,255), 30); // Moon
    
    rotate(radians(speed*4));
    translate(25,0);
    rotate(radians(speed*4));
    celestialObj(color(120,120,120), 20); // Asteroid
    pop();
    
    rotate(radians(speed*2));
    translate(150,0);
    rotate(radians(speed*2));
    celestialObj(color(220,220,220), 40); // Bigger Moon
    pop();
    
 
}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
    
    
}


