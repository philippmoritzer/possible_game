class Stage1 extends Phaser.Scene {
  constructor() {
    super({ key: "Stage1" });
  }

  preload() {
    this.map = this.make.tilemap({ key: "map1" });
    this.tileset = this.map.addTilesetImage("tileset", "tileset");
  }

  create() {
    this.sceneKey = "Stage1";
    this.counter = 3;
    this.started = false;
    this.gameWon = true;

    initBackgroundLayerArea1(this);
    createBasicLevelSetup(this);

    this.physics.add.collider(
      this.spikeLayer,
      this.player,
      () => {
        hitSpike(this, this.sceneKey);
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

    this.triesText.setFill("#000");
    this.stageText.setFill("#000");
    this.stageText.setText("Bluecliff Hills");
  }

  update(time, delta) {
    setSceneBackgroundRelativeToCameraArea1(this);
    if (startCounter(time, this.counterText)) {
      if (this.gameWon) {
        if (this.cursors.up.isDown) {
          if (this.player.body.blocked.up) {
            this.player.setVelocityY(1100);
          } else if (this.player.body.blocked.down) {
            this.player.setVelocityY(-1100);
          }
        }
        moveTilesArea1(this);

        this.player.setVelocityX(400);
        if (!this.player.body.blocked.down || !this.player.body.blocked.down) {
          this.player.setVelocityX(350);
        }

        if (this.player.y > 5000) {
          gameOver(this, this.sceneKey);
        }
        if (this.player.y < -5000) {
          gameOver(this, this.sceneKey);
        }
      } else {
        this.physics.pause();
      }
    }
  }

  reverseGravity() {
    if (this.physics.world.gravity.y === -5000 && this.player.body.blocked.up) {
      this.physics.world.gravity.y = 5000;
      this.player.rotation = 0;
    } else if (
      this.physics.world.gravity.y === 5000 &&
      this.player.body.blocked.down
    ) {
      this.physics.world.gravity.y = -5000;
      this.player.rotation = 3.15;
    }
  }

  stageDone() {
    if (!practiceMode) {
      gameState.scene = "Stage2";
      this.scene.start("Stage2");
    } else {
      this.scene.start("Menu");
    }
  }
}
