class PreloadScene4 extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene4" });
  }

  preload() {
    loadingBar(this);
  }
  create() {
    this.scene.start("Stage4");
  }
}
