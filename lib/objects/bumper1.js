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
    ctx.fillStyle = 'black';
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
