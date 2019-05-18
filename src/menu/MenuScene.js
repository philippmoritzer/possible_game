class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "Menu" });
  }

  preload() {}
  create() {
    this.random_background = getRandomInt(1, 4);
    switch (this.random_background) {
      case 1:
        initBackgroundLayerArea1(this);
        break;
      case 2:
        initBackgroundLayerArea2(this);
        break;
      case 3:
        initBackgroundLayerArea3(this);
        break;
      case 4:
        initBackgroundLayerArea4(this);
        break;
    }

    this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height * 0.1,
      "logo"
    );

    let resumeGameButton = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height * 0.3,
      "resume_game_button"
    );
    if (!localStorage.getItem("game-state")) {
      resumeGameButton.setVisible(false);
    }

    let playButton = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height * 0.45,
      "play_button"
    );

    let selectLevelButton = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height * 0.6,
      "select_level_button"
    );

    let highscoreText = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height * 0.75,
      "highscore_button"
    );

    let triesText = this.add.text(
      highscoreText.x + 250,
      highscoreText.y - 20,
      "38",
      {
        fontSize: "40pt",
        fill: "#fff"
      }
    );
    if (!localStorage.getItem("highscore")) {
      triesText.setText("-");
    } else {
      triesText.setText(localStorage.getItem("highscore"));
    }

    let hoverSprite = this.add.sprite(100, 100, "dude");
    hoverSprite.setVisible(false);

    this.anims.create({
      key: "walk",
      frameRate: 4,
      repeat: -1,
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 2 })
    });

    playButton.setInteractive();
    selectLevelButton.setInteractive();
    resumeGameButton.setInteractive();

    playButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = playButton.x - playButton.width;
      hoverSprite.y = playButton.y;
    });

    playButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });
    playButton.on("pointerup", () => {
      practiceMode = false;
      this.music.stop();
      this.scene.start("Stage1");
    });

    selectLevelButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = selectLevelButton.x - selectLevelButton.width;
      hoverSprite.y = selectLevelButton.y;
    });

    selectLevelButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });
    selectLevelButton.on("pointerup", () => {
      this.music.stop();
      this.scene.start("LevelSelect");
    });

    resumeGameButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = resumeGameButton.x - resumeGameButton.width;
      hoverSprite.y = resumeGameButton.y;
    });

    resumeGameButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });
    resumeGameButton.on("pointerup", () => {
      practiceMode = false;
      gameState = JSON.parse(localStorage.getItem("game-state"));
      this.music.stop();
      this.scene.start(gameState.scene);
    });

    this.playMusic();
  }

  update() {
    switch (this.random_background) {
      case 1:
        moveTilesArea1(this);

        break;
      case 2:
        moveTilesArea2(this);
        break;
      case 3:
        moveTilesArea3(this);
        break;
      case 4:
        moveTilesArea4(this);
        break;
    }
  }

  playMusic() {
    this.music = this.sound.add("menu_audio", musicConfig);
    this.music.play();
  }
}
