let dot1, dot2, dot3;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  colorMode(HSL, 360, 100, 100);
  dot1 = new BouncyDot();
  dot2 = new BouncyDot();
  dot3 = new BouncyDot();
}

function draw() {
  background(220, 0, 80);
  dot1.float();
  dot1.display();
  dot2.float();
  dot2.display();
  dot3.float();
  dot3.display();
}


class BouncyDot {
  constructor() {
    // Randomly generate position
    this.x = random(width);
    this.y = random(height);
    // Randomly generate radius
    this.r = random(5, 12);
    // Randomly generate color
    this.color = random(360);
    // Randomly generate a standard velocity (broken into components)...
    this.standardXvelocity = random(0.5, 3);
    this.standardYvelocity = random(0.5, 3);
    // ...and use those as starting velocities.
    this.xVelocity = this.standardXvelocity;
    this.yVelocity = this.standardYvelocity;
  }

  float() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    // Standard bounce code - like the DVD logo, but for spheres.
    if (this.x + this.r > width) {
      this.xVelocity = -1 * this.standardXvelocity;
    }
    if (this.x - this.r < 0) {
      this.xVelocity = this.standardXvelocity;
    }
    if (this.y + this.r > height) {
      this.yVelocity = -1 * this.standardYvelocity;
    }
    if (this.y - this.r < 0) {
      this.yVelocity = this.standardYvelocity;
    }
  }

  display() {
    fill(this.color, 80, 70);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
