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
    const debugGraphics = this.add.graphics().setAlpha(0.75);
    this.spikeLayer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
    this.playMusic();
  }

  update(time, delta) {
    setSceneBackgroundRelativeToCameraArea1(this);

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      initPauseScreen(this);
    }
    if (startCounter(time, this.counterText)) {
      if (this.gameWon) {
        if (this.cursors.up.isDown) {
          if (this.player.body.blocked.up) {
            playJumpSound(this);
            this.player.setVelocityY(1100);
          } else if (this.player.body.blocked.down) {
            playJumpSound(this);
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
    this.music.stop();
    if (!practiceMode) {
      gameState.scene = "Stage2";
      this.scene.start("Stage2");
    } else {
      this.scene.start("Menu");
    }
  }

  playMusic() {
    this.music = this.sound.add("hills_audio", musicConfig);
    this.music.play();
  }
}
