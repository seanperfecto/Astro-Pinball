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
    ctx.fillStyle = 'black';
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
