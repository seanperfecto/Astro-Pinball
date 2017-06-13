class BumperThree {
  constructor() {
    this.radius = BumperThree.RADIUS;
    this.color = BumperThree.COLOR;
    this.ballPosX = 240;
    this.ballPosY = 120;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI*2, false);
    let grd=ctx.createLinearGradient(90,90,280,280);
      grd.addColorStop(0,'#7bc6cc');
      grd.addColorStop(1,'#be93c5');
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
    ctx.font="40px Bungee Outline";
    ctx.fillStyle = "white";
    ctx.fillText("7",228,136);
  }
}

BumperThree.RADIUS = 35;
BumperThree.COLOR = 'lightgreen';

module.exports = BumperThree;
