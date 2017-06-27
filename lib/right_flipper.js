let rPressed = false;
let posY = 520;

document.addEventListener("keydown", rightFlipperHandler, false);
document.addEventListener("keyup", rightFlipperHandlerUp, false);

function rightFlipperHandler(e) {
    if(e.keyCode === 39) {
        rPressed = true;
    }
}
function rightFlipperHandlerUp(e) {
    if(e.keyCode === 39) {
        rPressed = false;
    }
}


class RightFlipper {
  constructor() {
    this.halfwidth = 45;
    this.halfheight = 10;
    this.pos1 = { x: 350, y: 480 };
    this.posY = posY;
    this.mid = {x: 305, y: (this.posY+480)/2};
  }

  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(350, 480);
    ctx.lineTo(260, this.posY);
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#D74F43';
    ctx.stroke();
    ctx.closePath();
    this.posY = this.posY;
    this.pos2 = { x: 260, y: this.posY };
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y};
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x/this.length, y: this.vec.y/this.length};
    if (rPressed && this.posY > 440) {
      this.flipRightUp(ctx);
    }
    if (rPressed === false && this.posY < 520) {
      this.flipRightDown(ctx);
    }
    this.mid = {x: 305, y: (this.posY+480)/2};
  }

  flipRightUp(ctx){
    this.posY -= 15;
    this.mid = {x: 170, y: (this.posY+480)/2};
    this.playFlip();
  }

  playFlip(){
    let x = document.getElementById('flip');
    x.currentTime = 0;
    x.play();
  }

  flipRightDown(ctx){
    this.posY += 15;
    this.mid = {x: 170, y: (this.posY+480)/2};
  }
}

module.exports = RightFlipper;
