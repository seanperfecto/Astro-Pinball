class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start(){
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
    // setInterval(this.animate(60), 60);
  }

  animate(time){
    const timeDiff = time - this.lastTime;
    this.game.step(timeDiff);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }



}

document.addEventListener("keydown", muteHandler, false);

function muteHandler(e) {
    if(e.keyCode === 77) {
        muteAudio();
    }
}

function muteAudio() {
let audio = document.getElementById('audio');
let bell = document.getElementById('bell');
let thud = document.getElementById('thud');
let flip = document.getElementById('flip');

if (audio.muted === false) {
    document.getElementById('audio').muted = true;
    document.getElementById('bell').muted = true;
    document.getElementById('thud').muted = true;
    document.getElementById('flip').muted = true;
}
else {
    document.getElementById('audio').muted = false;
    document.getElementById('bell').muted = false;
    document.getElementById('thud').muted = false;
    document.getElementById('flip').muted = false;
    }
}



module.exports = GameView;
