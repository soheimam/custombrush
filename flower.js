class Flower {
    constructor (x,y, hue){ 
        // what are things we need for our class
        this.x = x
        this.y = y
        this.hue = hue
        this.midSize = random(20,40)
       
    }
    draw(){
        // a method on the flower class on how we draw the flower
        colorMode(HSB,100)
        noStroke()
        fill(this.hue, 100,100)
    
         // we minus half of the square size from Y and X
        // square(mouseX-30,mouseY -30, 60)
        //square(this.x-25, this.y-25, 50)
        //fill(this.hueMini,100,100)
        circle(this.x, this.y, this.midSize)
    }
}