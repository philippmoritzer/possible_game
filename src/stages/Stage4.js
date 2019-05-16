class Stage4 extends Phaser.Scene {
  constructor() {
    super({ key: "Stage4" });
  }
  preload() {
    this.map = this.make.tilemap({ key: "map4" });
    this.tileset = this.map.addTilesetImage("tileset", "tileset");
  }

  create() {
    this.gameWon = true;

    initBackgroundLayerArea4(this);

    createBasicLevelSetup(this);

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
    this.physics.world.gravity.y = 2000;
  }

  update(time, delta) {
    setSceneBackgroundRelativeToCameraArea4(this);

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
        moveTilesArea4(this);

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
}
