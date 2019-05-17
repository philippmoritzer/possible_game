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
    this.sceneKey = "Stage4";

    initBackgroundLayerArea4(this);

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
    this.physics.world.gravity.y = 2000;
    this.stageText.setText("The Moon");
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
          gameOver(this, this.sceneKey);
        }
      } else {
        this.physics.pause();
      }
    }
  }

  stageDone() {
    //TODO
    if (!practiceMode) {
      if (!localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", gameState.killCount);
      } else {
        if (gameState.killCount < localStorage.getItem("highscore")) {
          localStorage.setItem("highscore", gameState.killCount);
        }
      }
      gameState = emptyGameState;
    }
    localStorage.removeItem("game-state");

    this.scene.start("Menu");
  }
}
