class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "Menu" });
  }

  preload() {}
  create() {
    this.random_background = Math.random() >= 0.5;
    if (this.random_background) {
      initBackgroundLayerArea2(this);
    } else {
      initBackgroundLayerArea1(this);
    }

    this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height * 0.2,
      "logo"
    );

    let playButton = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2,
      "play_button"
    );

    let selectLevelButton = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2 + 150,
      "select_level_button"
    );

    this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2 + 300,
      "options_button"
    );

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

    playButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = playButton.x - playButton.width;
      hoverSprite.y = playButton.y;
      console.log("hover");
    });

    playButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
      console.log("out");
    });
    playButton.on("pointerup", () => {
      this.scene.start("PreloadScene1");
    });

    selectLevelButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = selectLevelButton.x - selectLevelButton.width;
      hoverSprite.y = selectLevelButton.y;
      console.log("hover");
    });

    selectLevelButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
      console.log("out");
    });
    selectLevelButton.on("pointerup", () => {
      this.scene.start("LevelSelect");
    });
  }

  update() {
    if (this.random_background) {
      moveTilesArea2(this);
    } else {
      moveTilesArea1(this);
    }
  }
}
