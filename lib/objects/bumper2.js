class BumperTwo {
  constructor() {
    this.radius = BumperTwo.RADIUS;
    this.color = BumperTwo.COLOR;
    this.ballPosX = 325;
    this.ballPosY = 220;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI*2, false);
    let grd=ctx.createLinearGradient(180,180,360,360);
      grd.addColorStop(0,'#be93c5');
      grd.addColorStop(1,'#7bc6cc');
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
    ctx.font="40px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("5",314,232);
  }
}

BumperTwo.RADIUS = 35;
BumperTwo.COLOR = 'lightgreen';

module.exports = BumperTwo;
