class Flower {
    constructor (x,y, hue, size){ 
        // what are things we need for our class
        this.rotation = 0
        this.rotationSpeed = random(-0.01, 0.01)
        this.pos = createVector(x, y)
        this.lines = random(7, 20)
        this.midSize = size
        this.petalSize = random(5, 15)
        this.radius = (size / 2) + random(0, 20)
        this.startRot = 0
        this.rotSpeed = random(-0.0010, 0.010)
        this.hue = hue
      
    
       
    }
    draw(){
        // a method on the flower class on how we draw the flower
        this.startRot += this.rotSpeed
        noStroke()
        colorMode(HSB,100)

        fill(this.hue, 100,90)
    
         // we minus half of the square size from Y and X
        // square(mouseX-30,mouseY -30, 60)
        //square(this.x-25, this.y-25, 50)
        //fill(this.hueMini,100,100)
        circle(this.pos.x, this.pos.y, this.midSize)


        for (let num = 0; num <  this.lines; num = num + 1) {

            let angle = TWO_PI * num / this.lines + this.startRot
            // let px =  this.petalDist  * cos(angle)
            // let py =  this.petalDist * sin(angle)

            // branch does the cos and sin 
            let branch = createVector(this.radius, 0)
            branch.rotate(angle)
            branch.add(this.pos)


            circle(branch.x, branch.y, this.petalSize)

        }

    }
}

