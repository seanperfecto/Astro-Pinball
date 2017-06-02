let upPressed = false;
let downPressed = false;
let tposX = 440;
let tposY = 400;
let velY = 0;
let tposYMax = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 38) {
        upPressed = true;
    }
    else if(e.keyCode === 40) {
        downPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode === 38) {
        upPressed = false;
    }
    else if(e.keyCode === 40) {
        downPressed = false;
      }
}

class Thruster {
  constructor() {
    this.height = Thruster.HEIGHT;
    this.width = Thruster.WIDTH;
    this.color = Thruster.COLOR;
    this.tposY = tposY;
    this.tposX = tposX;
    this.tposYMax = 0;
  }

  draw(ctx){
    if (downPressed && this.tposY < 480) {
      this.tposY += 1;
    } else if (downPressed === false && this.tposY > 400) {
      if (this.tposY > this.tposYMax) {
        this.tposYMax = this.tposY;
      }
      if (this.tposYMax % 16 === 0) {
        this.tposY -= 17;
      } else {
        this.tposY -= 16;
      }
    }
    if (this.tposY === 400) {
      this.tposYMax = 0;
    }
  }
}


Thruster.HEIGHT = 60;
Thruster.WIDTH = 30;
Thruster.COLOR = 'blue';

module.exports = Thruster;
