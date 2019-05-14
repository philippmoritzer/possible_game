class Stage2 extends Phaser.Scene {
  constructor() {
    super({ key: "Stage2" });
  }

  preload() {
    this.map = this.make.tilemap({ key: "map2" });
    this.tileset = this.map.addTilesetImage("tileset", "tileset");
  }

  create() {
    this.gameWon = true;

    initBackgroundLayerArea2(this);
    this.caveLayer = this.map.createStaticLayer("cave", this.tileset, 0, -1890);

    createBasicLevelSetup(this);
    this.cameras.main.backgroundColor.setTo(56, 5, 5);

    this.physics.add.collider(
      this.spikeLayer,
      this.player,
      () => {
        hitSpike(this);
      },
      null,
      this
    );

    this.physics.add.collider(
      this.gravityLayer,
      this.player,
      this.reverseGravity,
      null,
      this
    );

    this.physics.add.collider(
      this.finishLayer,
      this.player,
      this.stageDone,
      null,
      this
    );
  }

  update(time, delta) {
    setSceneBackgroundRelativeToCameraArea2(this);

    // Runs once per frame for the duration of the scene
    if (startCounter(time, this.counterText)) {
      if (this.gameWon) {
        if (this.cursors.up.isDown) {
          if (this.player.body.blocked.up) {
            this.player.setVelocityY(1100);
          } else if (this.player.body.blocked.down) {
            this.player.setVelocityY(-1100);
          }
        }
        moveTilesArea2(this);

        this.player.setVelocityX(400);
        if (!this.player.body.blocked.down || !this.player.body.blocked.down) {
          this.player.setVelocityX(350);
        }

        if (this.player.y > 5000) {
          gameOver(this);
        }
      } else {
        this.physics.pause();
      }
    }
  }
  stageDone() {
    this.scene.start("Stage2");
  }
}
