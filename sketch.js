let myFont
let points

function preload() {
  myFont = loadFont("inconsolata-bold.ttf");
}


function setup() {
  createCanvas(1200, 600);
  
  points= myFont.textToPoints("Brahma", 130, 330,  300,{
    sampleFactor:0.1,
    simplifyThreshold: 0
    
  })
}

function draw() {
  const nl=0.01
  background(000)
  fill("#fff")
  textAlign(CENTER, CENTER)
  noStroke()
 
  
  points.forEach(point=>{
    
    const distance = createVector(point.x-mouseX,point.y-mouseY)
    const distortion = distance.mult(60/distance.mag())
    
    circle(point.x + distortion.x, point.y + distortion.y, 5)
  })
  

  noFill()  
  stroke("#fff")
  
  beginShape();
    points.forEach(point=>{
      const distance = createVector(point.x-mouseX,point.y-mouseY)
    const distortion = distance.mult(60/distance.mag())
    
    const nx = 40 * noise(nl * point.x, nl*point.y, nl*frameCount) - 20
    const ny= 40 * noise(nl * point.x, nl*point.y, nl*frameCount) - 20
    
      vertex(point.x + distortion.x + nx, point.y+distortion.y+ny)
  })
  endShape();
  
  
  
}