class InnerWall {
  constructor() {
    this.height = 80;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(60, 150);
    ctx.lineTo(60, 460);
    ctx.lineTo(120, 470);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(420, 150);
    ctx.lineTo(420, 460);
    ctx.lineTo(360, 470);
    ctx.stroke();
  }
}

module.exports = InnerWall;
