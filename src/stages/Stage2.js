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
    this.doublespeed = false;
    this.sceneKey = "Stage2";

    initBackgroundLayerArea2(this);
    this.caveLayer = this.map.createStaticLayer("cave", this.tileset, 0, -1890);

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
    this.stageText.setText("Landmeadow Desert");
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
        if (!this.player.body.blocked.down) {
          this.player.setVelocityX(350);
        }

        if (this.player.y > 5000) {
          gameOver(this, this.sceneKey);
        }
      } else {
        this.physics.pause();
      }
      if (this.player.x > 1750) {
        this.doublespeed = true;
        this.player.setVelocityX(800);
      }
    }
  }
  stageDone() {
    if (!practiceMode) {
      gameState.scene = "Stage3";
      this.scene.start("Stage3");
    } else {
      this.scene.start("Menu");
    }
  }
}
