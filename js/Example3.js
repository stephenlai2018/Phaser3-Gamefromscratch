class Example3 extends Phaser.Scene {
  constructor() {
    super({key: "Example3"});
  }
  preload() {
    this.load.audio("test", ["assets/fire-burst.wav"]);
  }
  create() {
    this.soundFX = this.sound.add("test", {loop: "true"});
    this.soundFX.play();
    // this.soundFX.rate = 2.5; 

    this.input.keyboard.on("keydown_L", function(e) {
      this.soundFX.loop = !this.soundFX.loop;
      // if(this.soundFX.loop) this.soundFX.play();
      if(this.soundFX.isPlaying) this.soundFX.pause();
      else this.soundFX.resume();
    }, this);
  }
  
}