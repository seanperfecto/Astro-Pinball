let lPressed = false;
let posY = 520;

document.addEventListener("keydown", leftFlipperHandler, false);
document.addEventListener("keyup", leftFlipperHandlerUp, false);

function leftFlipperHandler(e) {
    if(e.keyCode === 37) {
        lPressed = true;
    }
}
function leftFlipperHandlerUp(e) {
    if(e.keyCode === 37) {
        lPressed = false;
    }
}


class LeftFlipper {
  constructor() {
    this.pos1 = { x: 125, y: 480 };
    this.halfwidth = 45;
    this.halfheight = 10;
    this.posY = posY;
    this.mid = {x: 170, y: (this.posY+480)/2};
  }


  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(125, 480);
    ctx.lineTo(215, this.posY);
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#D74F43';
    ctx.stroke();
    ctx.closePath();
    this.posY = this.posY;
    this.pos2 = { x: 215, y: this.posY };
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y};
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x/this.length, y: this.vec.y/this.length};
    if (lPressed && this.posY > 440) {
      this.flipLeftUp(ctx);
    }
    if (lPressed === false && this.posY < 520) {
      this.flipLeftDown(ctx);
    }
    this.mid = {x: 170, y: (this.posY+480)/2};
  }

  flipLeftUp(ctx){
    this.posY -= 15;
    this.mid = {x: 170, y: (this.posY+480)/2};
    this.playFlip();
  }

  playFlip(){
    let x = document.getElementById('flip');
    x.currentTime = 0;
    x.play();
  }

  flipLeftDown(ctx){
    this.posY += 15;
    this.mid = {x: 170, y: (this.posY+480)/2};
  }
}

module.exports = LeftFlipper;
