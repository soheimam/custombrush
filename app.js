
let flowers = []
 let hue
let size 

function setup() {
  createCanvas(windowWidth, windowHeight)
 

}

function draw() {
  //background("#111118")
  
  if (mouseIsPressed) {
    let flower = new Flower(mouseX, mouseY, hue, size)
    flowers.push(flower)
    
    hue += 0.5
    size += 1
    size = constrain(size, 20, 100)
    
    if (hue > 100) {
      hue = 0
    }
    
  } else {
    hue = random(0, 100)
    size = 20
  }
  
  flowers.forEach(flower => {
    flower.draw()
  })
}

function keyTyped() {
  if (key === 's') {
    saveCanvas("flowers", "png")
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
