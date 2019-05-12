class PreloadScene2 extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene2" });
  }

  preload() {
    this.load.tilemapTiledJSON("map2", "assets/tilemaps/level_2.json");
    loadingBar(this);
  }
  create() {
    this.scene.start("Stage2");
  }
}
