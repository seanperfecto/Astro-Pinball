class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start(){
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
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
var audio = document.getElementById('audio');
var bell = document.getElementById('bell');
var thud = document.getElementById('thud');

if (audio.muted === false) {
    document.getElementById('audio').muted = true;
    document.getElementById('bell').muted = true;
    document.getElementById('thud').muted = true;
}
else {
    document.getElementById('audio').muted = false;
    document.getElementById('bell').muted = false;
    document.getElementById('thud').muted = false;
    }
}



module.exports = GameView;
