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
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    ctx.font="40px Bungee Outline";
    ctx.fillStyle = "white";
    ctx.fillText("5",312,234);
  }
}

BumperTwo.RADIUS = 35;
BumperTwo.COLOR = 'lightgreen';

module.exports = BumperTwo;
