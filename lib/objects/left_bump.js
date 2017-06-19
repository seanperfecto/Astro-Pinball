class LeftBump {
  constructor() {
    this.height = 80;
    this.pos1 = {x: 50, y: 370};
    this.pos2 = {x: 120, y: 450};
    this.mid = {x: 85, y: 410};
    this.mid2 = {x: 50, y: 410};
    this.halfwidth = 35;
    this.halfheight = 0.5;
    this.halfwidthTwo = 0.5;
    this.halfheightTwo = 40;
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y};
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x/this.length, y: this.vec.y/this.length};
  }

  draw(ctx){
    let img = document.getElementById('earth');
    let earth = ctx.createPattern(img, 'repeat');
    ctx.beginPath();
    ctx.fillStyle = earth;
    ctx.moveTo(50, 450);
    ctx.lineTo(120, 450);
    ctx.lineTo(50, 370);
    ctx.fill();
  }
}



module.exports = LeftBump;
