class PreloadScene5 extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene5" });
  }

  preload() {
    loadingBar(this);
  }
  create() {
    this.scene.start("Stage5");
  }
}
