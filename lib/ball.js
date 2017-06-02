var Thruster = require('./objects/thruster');

let ballPosX = 445;
let ballPosY = 384;
let gravity = 0.20;
let elasticity = 0.8;
let friction = 0.1;


class Ball {
  constructor(ctx) {
    this.radius = Ball.RADIUS;
    this.color = Ball.COLOR;
    this.ballPosX = ballPosX;
    this.ballPosY = ballPosY;
    this.ballVelX = 0;
    this.ballVelY = 0;
    this.elasticity = elasticity;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
    if (this.ballVelY !== 0 && this.ballVelX !== 0) {
      this.ballVelY += gravity;
    }
    this.speed =
      Math.sqrt(this.ballVelX*this.ballVelX + this.ballVelY*this.ballVelY);
    this.dnorm = {x: this.ballVelX/this.speed, y: this.ballVelY/this.speed};
    this.ballPosY += this.ballVelY;
    this.ballPosX += this.ballVelX;
  }

  thrust(delta){
    this.ballVelY = -12;
  }

  firstReflect(delta){
    this.ballVelX = -2.5;
    this.ballVelY = 3;
  }


  isCollidedWithLine(obj){
    // X and Y distance between the ball and the bump
    let distX = Math.abs(this.ballPosX - (obj.mid.x));
    let distY = Math.abs(this.ballPosY - (obj.mid.y));

    // Distance too far
    if (distX > (obj.halfwidth + this.radius)) { return false; }
    if (distY > (obj.halfheight + this.radius)) { return false; }

    // Distance definitely colliding
    if (distX <= obj.halfwidth) { return true; }
    if (distY <= obj.halfheight) { return true; }

    // Checks corners using Pythagorean Theorem
    let dx = distX - obj.halfwidth;
    let dy = distY - obj.halfheight;
    return ((dx*dx)+(dy*dy)<=(this.radius*this.radius));
  }

  hitbackFlipper(obj){
    let dd = (this.dnorm.x*obj.vnorm.x + this.dnorm.y*obj.vnorm.y)*2;
    this.refl = {x: (obj.vnorm.x * dd - this.dnorm.x),
                      y: (obj.vnorm.y * dd - this.dnorm.y) };
    let length = Math.sqrt(this.refl.x*this.refl.x + this.refl.y*this.refl.y);
    this.ballPosY -= 4;
    this.ballVelX = (this.refl.x/length) * this.speed;
    this.ballVelY = ((this.refl.y/length) * this.speed * 1.1);
    this.playThud();
  }

  playThud(){
    let x = document.getElementById('thud');
    x.play();
  }


  collidewithTopWall(){
    this.ballPosY = this.radius;
    this.ballVelY = -this.ballVelY;
    this.ballVelY *= this.elasticity;
  }

  collidewithRightWall(){
    this.ballPosX = 470 - this.radius;
    this.ballVelX = - this.ballVelX;
    this.ballVelX *= this.elasticity;
  }

  collidewithLeftWall(){
    this.ballPosX = this.radius;
    this.ballVelX = - this.ballVelX;
    this.ballVelX *= this.elasticity;
  }

  isCollidedWithBumpers(obj){
    let distance = Math.sqrt(
      Math.pow(this.ballPosX - obj.ballPosX, 2) +
      Math.pow(this.ballPosY - obj.ballPosY, 2));
    return distance < (this.radius + obj.radius);
  }

  hitbackBumper(obj){
    let slope = ((this.ballPosY - obj.ballPosY)/(this.ballPosX - this.ballPosY));
    let inverseSlope = -1/(slope);
    let iPos = {x: inverseSlope, y: 1};
    let iPosMag = Math.sqrt(iPos.x*iPos.x + iPos.y*iPos.y);
    let iPosUnit = {x: iPos.x/iPosMag, y: iPos.y/iPosMag};
    let dd = (this.dnorm.x*iPosUnit.x + this.dnorm.y*iPosUnit.y)*2;
    this.refl = {x: (iPosUnit.x * dd - this.dnorm.x),
                      y: (iPosUnit.y * dd - this.dnorm.y) };
    let length = Math.sqrt(this.refl.x*this.refl.x + this.refl.y*this.refl.y);

    // Collision Point between ball and bumper
    // let cllsnpt = {x: ((this.ballPosX*obj.radius + obj.ballPosX*this.radius)/50),
    //   y: ((this.ballPosY*obj.radius + obj.ballPosY*this.radius)/50)};
    //
    //   // Collision Angle between ball and bumper
    // let angle = Math.atan((cllsnpt.y - this.ballPosY)/(cllsnpt.x - this.ballPosX));
    // if (angle < 0) {
    //   angle = 2*Math.PI + angle;
    // }

    // New Position of ball
    // if (this.ballPosX < obj.ballPosX) {
    //     this.ballPosX = this.ballPosX - Math.abs( (this.radius + obj.radius)*Math.cos(angle));
    //     if (this.ballPosY < obj.ballPosY) {
    //     this.ballPosY = this.ballPosY - Math.abs( (this.radius + obj.radius)*Math.sin(angle));
    //   } else {
    //     this.ballPosY = this.ballPosY + Math.abs( (this.radius + obj.radius)*Math.sin(angle));
    //   }
    // } else {
    //   this.ballPosX = this.ballPosX + Math.abs( (this.radius + obj.radius)*Math.cos(angle));
    //   if (this.ballPosY < obj.ballPosY) {
    //   this.ballPosY = this.ballPosY - Math.abs( (this.radius + obj.radius)*Math.sin(angle));
    // } else {
    //   this.ballPosY = this.ballPosY + Math.abs( (this.radius + obj.radius)*Math.sin(angle));
    // }
    // }
    this.ballVelX = (this.refl.x/length) * this.speed * 1.01;
    this.ballVelY = (this.refl.y/length) * this.speed * 1.01;
    this.playBumpSound();
  }

  playBumpSound(){
    let x = document.getElementById('bell');
    x.volume = 0.3;
    x.play();
  }

  hitbackBump(obj){
    let dd = (this.dnorm.x*obj.vnorm.x + this.dnorm.y*obj.vnorm.y)*2;
    this.refl = {x: (obj.vnorm.x * dd - this.dnorm.x),
                      y: (obj.vnorm.y * dd - this.dnorm.y) };
    let length = Math.sqrt(this.refl.x*this.refl.x + this.refl.y*this.refl.y);
    this.ballPosY -= 8;
    this.ballVelX = (this.refl.x/length) * this.speed;
    this.ballVelY = ((this.refl.y/length) * this.speed * 1.04);
    this.playBumpSound();
  }

  hitbackTriangle(obj){
    let dd = (this.dnorm.x*obj.vnorm.x + this.dnorm.y*obj.vnorm.y)*2;
    this.refl = {x: (obj.vnorm.x * dd - this.dnorm.x),
                      y: (obj.vnorm.y * dd - this.dnorm.y) };
    let length = Math.sqrt(this.refl.x*this.refl.x + this.refl.y*this.refl.y);
    this.ballPosY += 12;
    this.ballVelX = (this.refl.x/length) * this.speed * 0.94;
    this.ballVelY = (this.refl.y/length) * this.speed * 0.94;
  }

  isCollidedwithSideBump(obj){
    // X and Y distance between the ball and the bump
    let distX = Math.abs(this.ballPosX - (obj.mid2.x));
    let distY = Math.abs(this.ballPosY - (obj.mid2.y));

    // Distance too far
    if (distX > (obj.halfwidthTwo + this.radius)) { return false; }
    if (distY > (obj.halfheightTwo + this.radius)) { return false; }

    // Distance definitely colliding
    if (distX <= obj.halfwidthTwo) { return true; }
    if (distY <= obj.halfheightTwo) { return true; }

    // Checks corners using Pythagorean Theorem
    let dx = distX - obj.halfwidthTwo;
    let dy = distY - obj.halfheightTwo;
    return ((dx*dx)+(dy*dy)<=(this.radius*this.radius));
  }

  collidewithSideBump(){
    this.ballVelX = - this.ballVelX;
    this.ballVelX *= this.elasticity;
  }

}


Ball.RADIUS = 15;
Ball.COLOR = 'blue';
const NORMAL_FRAME_TIME_DELTA = 1000/60;

module.exports = Ball;
