class Stage2 extends Phaser.Scene {
  constructor() {
    super({ key: "Stage2" });
  }

  preload() {
    this.map = this.make.tilemap({ key: "map2" });
    this.tileset = this.map.addTilesetImage("tileset", "tileset");
  }

  create() {
    initBackgroundLayerArea2(this);
    createBasicLevelSetup(this);
  }

  update() {
    setSceneBackgroundRelativeToCameraArea2(this);
    moveTilesArea2(this);
  }
}
