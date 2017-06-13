class BumperOne {
  constructor() {
    this.radius = BumperOne.RADIUS;
    this.color = BumperOne.COLOR;
    this.ballPosX = 155;
    this.ballPosY = 220;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI*2, false);
    let grd=ctx.createLinearGradient(110,170,210,270);
      grd.addColorStop(0,'#be93c5');
      grd.addColorStop(1,'#7bc6cc');
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
    ctx.font="40px Bungee Outline";
    ctx.fillStyle = "white";
    ctx.fillText("5",142,234);
  }
}

BumperOne.RADIUS = 35;
BumperOne.COLOR = 'lightgreen';

module.exports = BumperOne;
