class BumperOne {
  constructor() {
    this.radius = BumperOne.RADIUS;
    this.color = BumperOne.COLOR;
    this.ballPosX = 155;
    this.ballPosY = 220;
  }

  draw(ctx) {
    let img = document.getElementById('mercury');
    let merc = ctx.createPattern(img, 'repeat');
    ctx.beginPath();
    ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = merc;
    ctx.fill();
    ctx.closePath();
  }
}

BumperOne.RADIUS = 35;
BumperOne.COLOR = 'lightgreen';

module.exports = BumperOne;
