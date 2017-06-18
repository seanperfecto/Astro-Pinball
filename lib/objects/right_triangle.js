class RightTriangle {
  constructor() {
    this.height = 80;
    this.pos1 = {x: 410, y: 0};
    this.pos2 = {x: 470, y: 80};
    this.mid = {x: 440, y: 40};
    this.halfwidth = 40;
    this.halfheight = 0.5;
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y};
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x/this.length, y: this.vec.y/this.length};
  }

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = '#D74F43';
    ctx.moveTo(410, 0);
    ctx.lineTo(470, 0);
    ctx.lineTo(470, 80);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = '#D74F43';
    ctx.moveTo(470, 570);
    ctx.lineTo(470, 490);
    ctx.lineTo(410, 570);
    ctx.fill();
  }
}

module.exports = RightTriangle;
