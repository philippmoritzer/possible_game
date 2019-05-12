class PreloadScene6 extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene6" });
  }

  preload() {
    loadingBar(this);
  }
  create() {
    this.scene.start("Stage6");
  }
}
