class LeftBump {
  constructor() {
    this.height = 80;
    this.pos1 = {x: 420, y: 370};
    this.pos2 = {x: 350, y: 450};
    this.mid = {x: 385, y: 410};
    this.mid2 = {x: 420, y: 410};
    this.halfwidth = 35;
    this.halfheight = 0.5;
    this.halfwidthTwo = 0.5;
    this.halfheightTwo = 40;
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y};
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x/this.length, y: this.vec.y/this.length};
  }

  draw(ctx){
    ctx.beginPath();
    let grd=ctx.createLinearGradient(350,370,420,450);
      grd.addColorStop(0,'#7bc6cc');
      grd.addColorStop(1,'#be93c5');
    ctx.fillStyle = grd;
    ctx.moveTo(350, 450);
    ctx.lineTo(420, 450);
    ctx.lineTo(420, 370);
    ctx.fill();
    ctx.font="30px Bungee Outline";
    ctx.fillStyle = "white";
    ctx.fillText("3",395,430);
  }
}

module.exports = LeftBump;
