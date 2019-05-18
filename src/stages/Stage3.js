class Stage3 extends Phaser.Scene {
  constructor() {
    super({ key: "Stage3" });
  }
  preload() {
    this.map = this.make.tilemap({ key: "map3" });
    this.tileset = this.map.addTilesetImage("tileset", "tileset");
  }

  create() {
    this.gameWon = true;
    this.reversed = false;
    this.reversePoint = false;
    this.sceneKey = "Stage3";

    initBackgroundLayerArea3(this);

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
    this.stageText.setText("Karakoram Mountains");
    this.playMusic();
  }

  update(time, delta) {
    setSceneBackgroundRelativeToCameraArea3(this);

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      initPauseScreen(this);
    }
    // Runs once per frame for the duration of the scene
    if (startCounter(time, this.counterText)) {
      if (this.gameWon) {
        if (this.cursors.up.isDown) {
          if (
            ((this.player.x <= 760 && this.player.x >= 456) ||
              (this.player.x <= 2936 && this.player.x >= 2632)) &&
            this.player.body.blocked.down &&
            !this.reversePoint
          ) {
            this.reversed = !this.reversed;
          }

          if (this.player.body.blocked.down) {
            playJumpSound(this);
            this.player.setVelocityY(-1100);
          }
        }
        moveTilesArea3(this);
        if (this.reversePoint) {
          this.player.setVelocityX(-400);
        } else {
          if (this.reversed) {
            this.player.setVelocityX(-400);
          } else {
            this.player.setVelocityX(400);
          }
        }

        if (this.player.x >= 5320 && !this.reversePoint) {
          this.reversePoint = true;
        }

        if (!this.player.body.blocked.down || !this.player.body.blocked.down) {
          if (this.reversePoint === true) {
            this.player.setVelocityX(-350);
          } else {
            if (this.reversed) {
              this.player.setVelocityX(-350);
            } else {
              this.player.setVelocityX(350);
            }
          }
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
    this.music.stop();
    if (!practiceMode) {
      gameState.scene = "Stage4";
      this.scene.start("Stage4");
    } else {
      this.scene.start("Menu");
    }
  }
  playMusic() {
    this.music = this.sound.add("ice_audio", musicConfig);
    this.music.play();
  }
}
