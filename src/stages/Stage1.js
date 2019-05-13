class Stage1 extends Phaser.Scene {
  constructor() {
    super({ key: "Stage1" });
  }

  preload() {
    this.map = this.make.tilemap({ key: "map" });

    this.tileset = this.map.addTilesetImage("tileset", "tileset");
  }

  create() {
    this.counter = 3;
    this.started = false;
    this.gameWon = true;

    initBackgroundLayerArea1(this);
    createBasicLevelSetup(this);

    this.physics.add.collider(
      this.spikeLayer,
      this.player,
      this.hitSpike,
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

    this.cursors = this.input.keyboard.createCursorKeys();
    this.started = false;
    this.input.on("pointerdown", () => {
      if (this.player.body.blocked.down) {
        this.player.setVelocityY(-1100);
      }
    });

    this.counterText = this.add.text(
      this.camera.scrollX + GAME_WIDTH / 2,
      GAME_HEIGHT / 2,
      this.counter,
      {
        fontSize: "72px",
        fill: "#fff"
      }
    );
  }

  update(time, delta) {
    setSceneBackgroundRelativeToCameraArea1(this);

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
        moveTilesArea1(this);

        this.player.setVelocityX(400);
        if (!this.player.body.blocked.down || !this.player.body.blocked.down) {
          this.player.setVelocityX(350);
        }

        if (this.player.y > 5000) {
          this.gameOver();
          this.gameWon = false;
        }
      } else {
        this.physics.pause();
      }
    }
  }

  hitSpike(player, spike) {
    this.gameOver();
  }

  reverseGravity() {
    if (this.physics.world.gravity.y === -5000 && this.player.body.blocked.up) {
      this.physics.world.gravity.y = 5000;
    } else if (
      this.physics.world.gravity.y === 5000 &&
      this.player.body.blocked.down
    ) {
      this.physics.world.gravity.y = -5000;
    }
  }

  stageDone() {
    this.scene.start("Stage2");
  }

  gameOver() {
    console.log("Game over");
    this.gameWon = false;
    this.physics.pause();
  }
}
