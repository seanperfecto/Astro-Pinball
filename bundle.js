/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var upPressed = false;
var downPressed = false;
var tposX = 440;
var tposY = 400;
var velY = 0;
var tposYMax = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode === 38) {
    upPressed = true;
  } else if (e.keyCode === 40) {
    downPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode === 38) {
    upPressed = false;
  } else if (e.keyCode === 40) {
    downPressed = false;
  }
}

var Thruster = function () {
  function Thruster() {
    _classCallCheck(this, Thruster);

    this.height = Thruster.HEIGHT;
    this.width = Thruster.WIDTH;
    this.color = Thruster.COLOR;
    this.tposY = tposY;
    this.tposX = tposX;
    this.tposYMax = 0;
  }

  _createClass(Thruster, [{
    key: "draw",
    value: function draw(ctx) {
      if (downPressed && this.tposY < 480) {
        this.tposY += 1;
      } else if (downPressed === false && this.tposY > 400) {
        if (this.tposY > this.tposYMax) {
          this.tposYMax = this.tposY;
        }
        if (this.tposYMax % 16 === 0) {
          this.tposY -= 17;
        } else {
          this.tposY -= 16;
        }
      }
      if (this.tposY === 400) {
        this.tposYMax = 0;
      }
    }
  }]);

  return Thruster;
}();

Thruster.HEIGHT = 60;
Thruster.WIDTH = 30;
Thruster.COLOR = 'blue';

module.exports = Thruster;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Thruster = __webpack_require__(0);
var RightTriangle = __webpack_require__(11);
var LeftTriangle = __webpack_require__(9);
var Ball = __webpack_require__(3);
var RightFlipper = __webpack_require__(13);
var LeftFlipper = __webpack_require__(4);
var BumperOne = __webpack_require__(5);
var BumperTwo = __webpack_require__(6);
var BumperThree = __webpack_require__(7);
var LeftBump = __webpack_require__(8);
var RightBump = __webpack_require__(10);

var sPressed = false;

document.addEventListener("keydown", SpaceHandler, false);
document.addEventListener("keyup", SpaceHandlerUp, false);

function SpaceHandler(e) {
  if (e.keyCode === 32) {
    sPressed = true;
  }
}
function SpaceHandlerUp(e) {
  if (e.keyCode === 32) {
    sPressed = false;
  }
}

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

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

  _createClass(Game, [{
    key: 'draw',
    value: function draw(ctx) {
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
        this.ball.ballVelY = 0;
        this.score = 0;
        document.getElementById("test").innerHTML = this.score;
      }
    }
  }, {
    key: 'step',
    value: function step(delta) {
      // Thruster Ball Starting Movement
      if (this.ball.ballPosX === 445 && this.ball.ballPosY + 15 > this.thruster.tposY) {
        this.ball.thrust(delta);
      } else if (this.ball.ballPosX === 445 && this.ball.ballPosY < 80) {
        this.ball.firstReflect(delta);
      }

      this.checkCollisions();
    }
  }, {
    key: 'checkCollisions',
    value: function checkCollisions() {
      // Flipper Collision
      var flippers = this.flippers();
      for (var i = 0; i < flippers.length; i++) {
        if (this.ball.isCollidedWithLine(flippers[i])) {
          this.ball.hitbackFlipper(flippers[i]);
        }
      }

      // Wall Collision
      if (this.ball.ballPosY <= 0 + this.ball.radius) {
        this.ball.collidewithTopWall();
      } else if (this.ball.ballPosX >= Game.DIM_X - this.ball.radius) {
        this.ball.collidewithRightWall();
      } else if (this.ball.ballPosX <= this.ball.radius) {
        this.ball.collidewithLeftWall();
      }

      // BumperCollision
      var bumpers = this.bumpers();
      for (var j = 0; j < bumpers.length; j++) {
        if (this.ball.isCollidedWithBumpers(bumpers[j])) {
          this.ball.hitbackBumper(bumpers[j]);
          if (j === 2) {
            this.score += 7;
          } else {
            this.score += 5;
          }
        }
      }

      var bumps = this.bumps();
      for (var k = 0; k < bumps.length; k++) {
        if (this.ball.isCollidedWithLine(bumps[k])) {
          this.ball.hitbackBump(bumps[k]);
          this.score += 3;
        } else if (this.ball.isCollidedwithSideBump(bumps[k])) {
          this.ball.collidewithSideBump();
          this.score += 3;
        }
      }

      var triangles = this.triangles();
      for (var l = 0; l < triangles.length; l++) {
        if (this.ball.isCollidedWithLine(triangles[l])) {
          this.ball.hitbackTriangle(triangles[l]);
        }
      }
    }
  }, {
    key: 'flippers',
    value: function flippers() {
      return [].concat(this.rightFlipper, this.leftFlipper);
    }
  }, {
    key: 'bumpers',
    value: function bumpers() {
      return [].concat(this.bumperOne, this.bumperTwo, this.bumperThree);
    }
  }, {
    key: 'bumps',
    value: function bumps() {
      return [].concat(this.leftBump, this.rightBump);
    }
  }, {
    key: 'triangles',
    value: function triangles() {
      return [].concat(this.leftTriangle, this.rightTriangle);
    }
  }]);

  return Game;
}();

module.exports = Game;

Game.DIM_X = 470;
Game.DIM_Y = 570;
Game.BG_COLOR = 'white';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.game = game;
    this.ctx = ctx;
  }

  _createClass(GameView, [{
    key: 'start',
    value: function start() {
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
      // setInterval(this.animate(60), 60);
    }
  }, {
    key: 'animate',
    value: function animate(time) {
      var timeDiff = time - this.lastTime;
      this.game.step(timeDiff);
      this.game.draw(this.ctx);
      this.lastTime = time;

      requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return GameView;
}();

document.addEventListener("keydown", muteHandler, false);

function muteHandler(e) {
  if (e.keyCode === 77) {
    muteAudio();
  }
}

function muteAudio() {
  var audio = document.getElementById('audio');
  var bell = document.getElementById('bell');
  var thud = document.getElementById('thud');
  var flip = document.getElementById('flip');

  if (audio.muted === false) {
    document.getElementById('audio').muted = true;
    document.getElementById('bell').muted = true;
    document.getElementById('thud').muted = true;
    document.getElementById('flip').muted = true;
  } else {
    document.getElementById('audio').muted = false;
    document.getElementById('bell').muted = false;
    document.getElementById('thud').muted = false;
    document.getElementById('flip').muted = false;
  }
}

module.exports = GameView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Thruster = __webpack_require__(0);

var ballPosX = 445;
var ballPosY = 384;
var gravity = 0.2;
var elasticity = 0.8;
var friction = 0.1;

var Ball = function () {
  function Ball(ctx) {
    _classCallCheck(this, Ball);

    this.radius = Ball.RADIUS;
    this.color = Ball.COLOR;
    this.ballPosX = ballPosX;
    this.ballPosY = ballPosY;
    this.ballVelX = 0;
    this.ballVelY = 0;
    this.elasticity = elasticity;
    this.bounced = false;
    this.bouncedTwo = false;
  }

  _createClass(Ball, [{
    key: 'draw',
    value: function draw(ctx) {
      var img = document.getElementById('moon');
      var pat = ctx.createPattern(img, 'repeat');
      ctx.beginPath();
      ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = pat;
      ctx.fill();
      ctx.closePath();
      if (this.ballVelY !== 0 && this.ballVelX !== 0) {
        this.ballVelY += gravity;
      }
      this.speed = Math.sqrt(this.ballVelX * this.ballVelX + this.ballVelY * this.ballVelY);
      this.dnorm = { x: this.ballVelX / this.speed, y: this.ballVelY / this.speed };
      this.ballPosY += this.ballVelY;
      this.ballPosX += this.ballVelX;
    }
  }, {
    key: 'thrust',
    value: function thrust(delta) {
      this.ballVelY = -12;
    }
  }, {
    key: 'firstReflect',
    value: function firstReflect(delta) {
      this.ballVelX = Math.random() * (-2.53 + 2.6) - 2.6;
      this.ballVelY = Math.random() * (3.4 - 3.1) + 3.1;
    }
  }, {
    key: 'isCollidedWithLine',
    value: function isCollidedWithLine(obj) {
      // X and Y distance between the ball and the bump
      var distX = Math.abs(this.ballPosX - obj.mid.x);
      var distY = Math.abs(this.ballPosY - obj.mid.y);

      // Distance too far
      if (distX > obj.halfwidth + this.radius) {
        return false;
      }
      if (distY > obj.halfheight + this.radius) {
        return false;
      }

      // Distance definitely colliding
      if (distX <= obj.halfwidth && this.bouncedTwo === false) {
        this.changeBounce();
        return true;
      }

      if (distX <= obj.halfheight && this.bouncedTwo === false) {
        this.changeBounce();
        return true;
      }

      // Checks corners using Pythagorean Theorem
      var dx = distX - obj.halfwidth;
      var dy = distY - obj.halfheight;
      if (dx * dx + dy * dy <= this.radius * this.radius && this.bouncedTwo === false) {
        this.changeBounce();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'hitbackFlipper',
    value: function hitbackFlipper(obj) {
      var dd = (this.dnorm.x * obj.vnorm.x + this.dnorm.y * obj.vnorm.y) * 2;
      this.refl = { x: obj.vnorm.x * dd - this.dnorm.x,
        y: obj.vnorm.y * dd - this.dnorm.y };
      var length = Math.sqrt(this.refl.x * this.refl.x + this.refl.y * this.refl.y);
      this.ballPosY -= 4;
      this.ballVelX = this.refl.x / length * this.speed;
      this.ballVelY = this.refl.y / length * this.speed * 1.07;
      this.playThud();
    }
  }, {
    key: 'playThud',
    value: function playThud() {
      var x = document.getElementById('thud');
      x.currentTime = 0;
      x.play();
    }
  }, {
    key: 'collidewithTopWall',
    value: function collidewithTopWall() {
      this.ballPosY = this.radius;
      this.ballVelY = -this.ballVelY;
      this.ballVelY *= this.elasticity;
    }
  }, {
    key: 'collidewithRightWall',
    value: function collidewithRightWall() {
      this.ballPosX = 470 - this.radius;
      this.ballVelX = -this.ballVelX;
      this.ballVelX *= this.elasticity;
    }
  }, {
    key: 'collidewithLeftWall',
    value: function collidewithLeftWall() {
      this.ballPosX = this.radius;
      this.ballVelX = -this.ballVelX;
      this.ballVelX *= this.elasticity;
    }
  }, {
    key: 'isCollidedWithBumpers',
    value: function isCollidedWithBumpers(obj) {
      var _this = this;

      var distance = Math.sqrt(Math.pow(this.ballPosX - obj.ballPosX, 2) + Math.pow(this.ballPosY - obj.ballPosY, 2));
      if (distance < this.radius + obj.radius && this.bounced === false) {
        this.bounced = true;
        obj.radius += 1;
        setTimeout(function () {
          _this.bounced = false;
          obj.radius -= 1;
        }, 200);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'hitbackBumper',
    value: function hitbackBumper(obj) {
      var slope = (this.ballPosY - obj.ballPosY) / (this.ballPosX - this.ballPosY);
      var inverseSlope = -1 / slope;
      var iPos = { x: inverseSlope, y: 1 };
      var iPosMag = Math.sqrt(iPos.x * iPos.x + iPos.y * iPos.y);
      var iPosUnit = { x: iPos.x / iPosMag, y: iPos.y / iPosMag };
      var dd = (this.dnorm.x * iPosUnit.x + this.dnorm.y * iPosUnit.y) * 2;
      this.refl = { x: iPosUnit.x * dd - this.dnorm.x,
        y: iPosUnit.y * dd - this.dnorm.y };
      var length = Math.sqrt(this.refl.x * this.refl.x + this.refl.y * this.refl.y);

      // Collision Point between ball and bumper
      var cllsnpt = { x: (this.ballPosX * obj.radius + obj.ballPosX * this.radius) / 50,
        y: (this.ballPosY * obj.radius + obj.ballPosY * this.radius) / 50 };

      //   // Collision Angle between ball and bumper
      // let angle = Math.atan((cllsnpt.y - this.ballPosY)/(cllsnpt.x - this.ballPosX));
      // if (angle < 0) {
      //   angle = 2*Math.PI + angle;
      // }
      //
      // // New Position of ball
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

      this.ballVelX = this.refl.x / length * this.speed * 1.01;
      this.ballVelY = this.refl.y / length * this.speed * 1.02;
      this.playBumpSound();
    }
  }, {
    key: 'playBumpSound',
    value: function playBumpSound() {
      var x = document.getElementById('bell');
      x.currentTime = 0;
      x.volume = 0.3;
      x.play();
    }
  }, {
    key: 'hitbackBump',
    value: function hitbackBump(obj) {
      var dd = (this.dnorm.x * obj.vnorm.x + this.dnorm.y * obj.vnorm.y) * 2;
      this.refl = { x: obj.vnorm.x * dd - this.dnorm.x,
        y: obj.vnorm.y * dd - this.dnorm.y };
      var length = Math.sqrt(this.refl.x * this.refl.x + this.refl.y * this.refl.y);
      this.ballPosY -= 2;
      this.ballVelX = this.refl.x / length * this.speed;
      this.ballVelY = this.refl.y / length * this.speed;
      this.playBumpSound();
    }
  }, {
    key: 'hitbackTriangle',
    value: function hitbackTriangle(obj) {
      var dd = (this.dnorm.x * obj.vnorm.x + this.dnorm.y * obj.vnorm.y) * 2;
      this.refl = { x: obj.vnorm.x * dd - this.dnorm.x,
        y: obj.vnorm.y * dd - this.dnorm.y };
      var length = Math.sqrt(this.refl.x * this.refl.x + this.refl.y * this.refl.y);
      this.ballPosY -= 12;
      this.ballVelX = this.refl.x / length * this.speed;
      this.ballVelY = this.refl.y / length * this.speed;
    }
  }, {
    key: 'isCollidedwithSideBump',
    value: function isCollidedwithSideBump(obj) {
      // X and Y distance between the ball and the bump
      var distX = Math.abs(this.ballPosX - obj.mid2.x);
      var distY = Math.abs(this.ballPosY - obj.mid2.y);

      // Distance too far
      if (distX > obj.halfwidthTwo + this.radius) {
        return false;
      }
      if (distY > obj.halfheightTwo + this.radius) {
        return false;
      }

      // Distance definitely colliding
      if (distX <= obj.halfwidthTwo && this.bouncedTwo === false) {
        this.changeBounce();
        return true;
      }
      if (distY <= obj.halfheightTwo && this.bouncedTwo === false) {
        this.changeBounce();
        return true;
      }

      // Checks corners using Pythagorean Theorem
      var dx = distX - obj.halfwidthTwo;
      var dy = distY - obj.halfheightTwo;
      if (dx * dx + dy * dy <= this.radius * this.radius && this.bouncedTwo === false) {
        this.changeBounce();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'changeBounce',
    value: function changeBounce() {
      var _this2 = this;

      this.bouncedTwo = true;
      setTimeout(function () {
        _this2.bouncedTwo = false;
      }, 200);
    }
  }, {
    key: 'collidewithSideBump',
    value: function collidewithSideBump() {
      this.ballVelX = -this.ballVelX;
      this.ballVelX *= this.elasticity;
    }
  }]);

  return Ball;
}();

Ball.RADIUS = 15;
Ball.COLOR = 'blue';
var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

module.exports = Ball;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lPressed = false;
var posY = 520;

document.addEventListener("keydown", leftFlipperHandler, false);
document.addEventListener("keyup", leftFlipperHandlerUp, false);

function leftFlipperHandler(e) {
  if (e.keyCode === 37) {
    lPressed = true;
  }
}
function leftFlipperHandlerUp(e) {
  if (e.keyCode === 37) {
    lPressed = false;
  }
}

var LeftFlipper = function () {
  function LeftFlipper() {
    _classCallCheck(this, LeftFlipper);

    this.pos1 = { x: 125, y: 480 };
    this.halfwidth = 45;
    this.halfheight = 10;
    this.posY = posY;
    this.mid = { x: 170, y: (this.posY + 480) / 2 };
  }

  _createClass(LeftFlipper, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(125, 480);
      ctx.lineTo(215, this.posY);
      ctx.lineWidth = 20;
      ctx.strokeStyle = '#D74F43';
      ctx.stroke();
      ctx.closePath();
      this.posY = this.posY;
      this.pos2 = { x: 215, y: this.posY };
      this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y };
      this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
      this.vnorm = { x: this.vec.x / this.length, y: this.vec.y / this.length };
      if (lPressed && this.posY > 440) {
        this.flipLeftUp(ctx);
      }
      if (lPressed === false && this.posY < 520) {
        this.flipLeftDown(ctx);
      }
      this.mid = { x: 170, y: (this.posY + 480) / 2 };
    }
  }, {
    key: "flipLeftUp",
    value: function flipLeftUp(ctx) {
      this.posY -= 15;
      this.mid = { x: 170, y: (this.posY + 480) / 2 };
      this.playFlip();
    }
  }, {
    key: "playFlip",
    value: function playFlip() {
      var x = document.getElementById('flip');
      x.currentTime = 0;
      x.play();
    }
  }, {
    key: "flipLeftDown",
    value: function flipLeftDown(ctx) {
      this.posY += 15;
      this.mid = { x: 170, y: (this.posY + 480) / 2 };
    }
  }]);

  return LeftFlipper;
}();

module.exports = LeftFlipper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BumperOne = function () {
  function BumperOne() {
    _classCallCheck(this, BumperOne);

    this.radius = BumperOne.RADIUS;
    this.color = BumperOne.COLOR;
    this.ballPosX = 155;
    this.ballPosY = 220;
  }

  _createClass(BumperOne, [{
    key: 'draw',
    value: function draw(ctx) {
      var img = document.getElementById('mercury');
      var merc = ctx.createPattern(img, 'repeat');
      ctx.beginPath();
      ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = merc;
      ctx.fill();
      ctx.closePath();
    }
  }]);

  return BumperOne;
}();

BumperOne.RADIUS = 35;
BumperOne.COLOR = 'lightgreen';

module.exports = BumperOne;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BumperTwo = function () {
  function BumperTwo() {
    _classCallCheck(this, BumperTwo);

    this.radius = BumperTwo.RADIUS;
    this.color = BumperTwo.COLOR;
    this.ballPosX = 325;
    this.ballPosY = 220;
  }

  _createClass(BumperTwo, [{
    key: 'draw',
    value: function draw(ctx) {
      var img = document.getElementById('mars');
      var mars = ctx.createPattern(img, 'repeat');
      ctx.beginPath();
      ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = mars;
      ctx.fill();
      ctx.closePath();
    }
  }]);

  return BumperTwo;
}();

BumperTwo.RADIUS = 35;
BumperTwo.COLOR = 'lightgreen';

module.exports = BumperTwo;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BumperThree = function () {
  function BumperThree() {
    _classCallCheck(this, BumperThree);

    this.radius = BumperThree.RADIUS;
    this.color = BumperThree.COLOR;
    this.ballPosX = 240;
    this.ballPosY = 120;
  }

  _createClass(BumperThree, [{
    key: 'draw',
    value: function draw(ctx) {
      var img = document.getElementById('neptune');
      var nep = ctx.createPattern(img, 'repeat');
      ctx.beginPath();
      ctx.arc(this.ballPosX, this.ballPosY, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = nep;
      ctx.fill();
      ctx.closePath();
    }
  }]);

  return BumperThree;
}();

BumperThree.RADIUS = 35;
BumperThree.COLOR = 'lightgreen';

module.exports = BumperThree;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftBump = function () {
  function LeftBump() {
    _classCallCheck(this, LeftBump);

    this.height = 80;
    this.pos1 = { x: 50, y: 370 };
    this.pos2 = { x: 120, y: 450 };
    this.mid = { x: 85, y: 410 };
    this.mid2 = { x: 50, y: 410 };
    this.halfwidth = 35;
    this.halfheight = 0.5;
    this.halfwidthTwo = 0.5;
    this.halfheightTwo = 40;
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y };
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x / this.length, y: this.vec.y / this.length };
  }

  _createClass(LeftBump, [{
    key: 'draw',
    value: function draw(ctx) {
      var img = document.getElementById('earth');
      var earth = ctx.createPattern(img, 'repeat');
      ctx.beginPath();
      ctx.fillStyle = earth;
      ctx.moveTo(50, 450);
      ctx.lineTo(120, 450);
      ctx.lineTo(50, 370);
      ctx.fill();
    }
  }]);

  return LeftBump;
}();

module.exports = LeftBump;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftTriangle = function () {
  function LeftTriangle() {
    _classCallCheck(this, LeftTriangle);

    this.height = 80;
    this.pos1 = { x: 60, y: 0 };
    this.pos2 = { x: 0, y: 80 };
    this.mid = { x: 30, y: 40 };
    this.halfwidth = 40;
    this.halfheight = 0.5;
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y };
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x / this.length, y: this.vec.y / this.length };
  }

  _createClass(LeftTriangle, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = '#D74F43';
      ctx.moveTo(0, 0);
      ctx.lineTo(60, 0);
      ctx.lineTo(0, 80);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = '#D74F43';
      ctx.moveTo(0, 570);
      ctx.lineTo(0, 490);
      ctx.lineTo(60, 570);
      ctx.fill();
    }
  }]);

  return LeftTriangle;
}();

module.exports = LeftTriangle;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftBump = function () {
  function LeftBump() {
    _classCallCheck(this, LeftBump);

    this.height = 80;
    this.pos1 = { x: 420, y: 370 };
    this.pos2 = { x: 350, y: 450 };
    this.mid = { x: 385, y: 410 };
    this.mid2 = { x: 420, y: 410 };
    this.halfwidth = 35;
    this.halfheight = 0.5;
    this.halfwidthTwo = 0.5;
    this.halfheightTwo = 40;
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y };
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x / this.length, y: this.vec.y / this.length };
  }

  _createClass(LeftBump, [{
    key: 'draw',
    value: function draw(ctx) {
      var img = document.getElementById('earth');
      var earth = ctx.createPattern(img, 'repeat');
      ctx.beginPath();
      ctx.fillStyle = earth;
      ctx.moveTo(350, 450);
      ctx.lineTo(420, 450);
      ctx.lineTo(420, 370);
      ctx.fill();
    }
  }]);

  return LeftBump;
}();

module.exports = LeftBump;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RightTriangle = function () {
  function RightTriangle() {
    _classCallCheck(this, RightTriangle);

    this.height = 80;
    this.pos1 = { x: 410, y: 0 };
    this.pos2 = { x: 470, y: 80 };
    this.mid = { x: 440, y: 40 };
    this.halfwidth = 40;
    this.halfheight = 0.5;
    this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y };
    this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
    this.vnorm = { x: this.vec.x / this.length, y: this.vec.y / this.length };
  }

  _createClass(RightTriangle, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = '#D74F43';
      ctx.moveTo(410, 0);
      ctx.lineTo(470, 0);
      ctx.lineTo(470, 80);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = '#D74F43';
      ctx.moveTo(470, 570);
      ctx.lineTo(470, 490);
      ctx.lineTo(410, 570);
      ctx.fill();
    }
  }]);

  return RightTriangle;
}();

module.exports = RightTriangle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(1);
var GameView = __webpack_require__(2);

document.addEventListener('DOMContentLoaded', function () {
  var canvasEl = document.getElementById('myCanvas');
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  var ctx = canvasEl.getContext('2d');

  var game = new Game();
  new GameView(game, ctx).start();
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rPressed = false;
var posY = 520;

document.addEventListener("keydown", rightFlipperHandler, false);
document.addEventListener("keyup", rightFlipperHandlerUp, false);

function rightFlipperHandler(e) {
  if (e.keyCode === 39) {
    rPressed = true;
  }
}
function rightFlipperHandlerUp(e) {
  if (e.keyCode === 39) {
    rPressed = false;
  }
}

var RightFlipper = function () {
  function RightFlipper() {
    _classCallCheck(this, RightFlipper);

    this.halfwidth = 45;
    this.halfheight = 10;
    this.pos1 = { x: 350, y: 480 };
    this.posY = posY;
    this.mid = { x: 305, y: (this.posY + 480) / 2 };
  }

  _createClass(RightFlipper, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(350, 480);
      ctx.lineTo(260, this.posY);
      ctx.lineWidth = 20;
      ctx.strokeStyle = '#D74F43';
      ctx.stroke();
      ctx.closePath();
      this.posY = this.posY;
      this.pos2 = { x: 260, y: this.posY };
      this.vec = { x: this.pos2.x - this.pos1.x, y: this.pos2.y - this.pos1.y };
      this.length = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
      this.vnorm = { x: this.vec.x / this.length, y: this.vec.y / this.length };
      if (rPressed && this.posY > 440) {
        this.flipRightUp(ctx);
      }
      if (rPressed === false && this.posY < 520) {
        this.flipRightDown(ctx);
      }
      this.mid = { x: 305, y: (this.posY + 480) / 2 };
    }
  }, {
    key: "flipRightUp",
    value: function flipRightUp(ctx) {
      this.posY -= 15;
      this.mid = { x: 170, y: (this.posY + 480) / 2 };
      this.playFlip();
    }
  }, {
    key: "playFlip",
    value: function playFlip() {
      var x = document.getElementById('flip');
      x.currentTime = 0;
      x.play();
    }
  }, {
    key: "flipRightDown",
    value: function flipRightDown(ctx) {
      this.posY += 15;
      this.mid = { x: 170, y: (this.posY + 480) / 2 };
    }
  }]);

  return RightFlipper;
}();

module.exports = RightFlipper;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map