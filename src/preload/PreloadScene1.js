class PreloadScene1 extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene1" });
  }

  preload() {
    this.load.tilemapTiledJSON("map", "assets/tilemaps/level_1.json");

    loadingBar(this);
  }
  create() {
    this.scene.start("Stage1");
  }
}
