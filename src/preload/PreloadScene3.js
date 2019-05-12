class PreloadScene3 extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene3" });
  }

  preload() {
    loadingBar(this);
  }
  create() {
    this.scene.start("Stage3");
  }
}
