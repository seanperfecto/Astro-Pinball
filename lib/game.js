const Thruster = require('./objects/thruster');
const RightTriangle = require('./objects/right_triangle');
const LeftTriangle = require('./objects/left_triangle');
const Ball = require('./ball');
const RightFlipper = require('./right_flipper');
const LeftFlipper = require('./left_flipper');
const BumperOne = require('./objects/bumper1');
const BumperTwo = require('./objects/bumper2');
const BumperThree = require('./objects/bumper3');
const LeftBump = require('./objects/left_bump');
const RightBump = require('./objects/right_bump');

let sPressed = false;

document.addEventListener("keydown", SpaceHandler, false);
document.addEventListener("keyup", SpaceHandlerUp, false);

function SpaceHandler(e) {
    if(e.keyCode === 32) {
        sPressed = true;
    }
}
function SpaceHandlerUp(e) {
    if(e.keyCode === 32) {
        sPressed = false;
    }
}

class Game {
  constructor() {
    this.thruster = new Thruster();
    this.ball = new Ball();
    this.rightTriangle = new RightTriangle();
    this.leftTriangle = new LeftTriangle();
    this.rightFlipper = new RightFlipper();
    this.leftFlipper = new LeftFlipper();
    this.bumperOne = new BumperOne();
    this.bumperTwo = new BumperTwo();
    this.bumperThree = new BumperThree();
    this.leftBump = new LeftBump();
    this.rightBump = new RightBump();
    this.score = 0;
    this.highscore = 0;
  }

  draw(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.thruster.draw(ctx);
    this.ball.draw(ctx);
    this.rightTriangle.draw(ctx);
    this.leftTriangle.draw(ctx);
    this.rightFlipper.draw(ctx);
    this.leftFlipper.draw(ctx);
    this.bumperOne.draw(ctx);
    this.bumperTwo.draw(ctx);
    this.bumperThree.draw(ctx);
    this.leftBump.draw(ctx);
    this.rightBump.draw(ctx);

    if (this.score > this.highscore) {
      this.highscore = this.score;
    }

    document.getElementById("test").innerHTML = this.score;
    document.getElementById("high").innerHTML = this.highscore;

    if (sPressed === true) {
      this.ball.ballPosX = 445;
      this.ball.ballPosY = 384;
      this.ball.ballVelX = 0;
      this.ball.ballVelY= 0;
      this.score = 0;
      document.getElementById("test").innerHTML = this.score;
    }
  }

  step(delta){
    // Thruster Ball Starting Movement
    if (this.ball.ballPosX === 445 &&
        this.ball.ballPosY + 15 > this.thruster.tposY) {
      this.ball.thrust(delta);
    } else if (this.ball.ballPosX === 445 && this.ball.ballPosY < 80) {
      this.ball.firstReflect(delta);
    }

    this.checkCollisions();
  }

  checkCollisions(){
    // Flipper Collision
    const flippers = this.flippers();
    for (var i = 0; i < flippers.length; i++) {
        if (this.ball.isCollidedWithLine(flippers[i])) {
          this.ball.hitbackFlipper(flippers[i]);
        }
    }

    // Wall Collision
    if (this.ball.ballPosY <= (0 + this.ball.radius)) {
      this.ball.collidewithTopWall();
    } else if (this.ball.ballPosX >= (Game.DIM_X - this.ball.radius)) {
      this.ball.collidewithRightWall();
    } else if (this.ball.ballPosX <= this.ball.radius) {
      this.ball.collidewithLeftWall();
    }

    // BumperCollision
    const bumpers = this.bumpers();
    for (var j = 0; j < bumpers.length; j++) {
      if (this.ball.isCollidedWithBumpers(bumpers[j])) {
        this.ball.hitbackBumper(bumpers[j]);
        if (j===2) {
          this.score += 7;
        } else {
          this.score += 5;
        }
      }
    }

    const bumps = this.bumps();
    for (var k = 0; k < bumps.length; k++) {
      if (this.ball.isCollidedWithLine(bumps[k])) {
        this.ball.hitbackBump(bumps[k]);
        this.score += 3;
      } else if (this.ball.isCollidedwithSideBump(bumps[k])) {
        this.ball.collidewithSideBump();
        this.score += 3;
      }
    }

    const triangles = this.triangles();
    for (var l = 0; l < triangles.length; l++) {
      if (this.ball.isCollidedWithLine(triangles[l])) {
        this.ball.hitbackTriangle(triangles[l]);
      }
    }

  }

  flippers() {
    return [].concat(this.rightFlipper, this.leftFlipper);
  }

  bumpers() {
    return [].concat(this.bumperOne, this.bumperTwo, this.bumperThree);
  }

  bumps(){
    return [].concat(this.leftBump, this.rightBump);
  }

  triangles(){
    return [].concat(this.leftTriangle, this.rightTriangle);
  }

}

module.exports = Game;

Game.DIM_X = 470;
Game.DIM_Y = 570;
Game.BG_COLOR = 'white';
