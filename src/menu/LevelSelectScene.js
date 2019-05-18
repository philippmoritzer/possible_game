class LevelSelectScene extends Phaser.Scene {
  constructor() {
    super({ key: "LevelSelect" });
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
      this.game.renderer.height * 0.9,
      "select_level_subtitle"
    );

    let area_1 = this.add.image(
      this.game.renderer.width / 2 - 200,
      this.game.renderer.height / 2 - 200,
      "area_1_thumbail"
    );
    let area_1_text = this.add.image(
      this.game.renderer.width / 2 + 150,
      this.game.renderer.height / 2 - 200,
      "area_1_thumbnail_text"
    );
    let area_2 = this.add.image(
      this.game.renderer.width / 2 - 200,
      this.game.renderer.height / 2 - 100,
      "area_2_thumbail"
    );
    let area_2_text = this.add.image(
      this.game.renderer.width / 2 + 185,
      this.game.renderer.height / 2 - 100,
      "area_2_thumbnail_text"
    );
    let area_3 = this.add.image(
      this.game.renderer.width / 2 - 200,
      this.game.renderer.height / 2 + 0,
      "area_3_thumbail"
    );
    let area_3_text = this.add.image(
      this.game.renderer.width / 2 + 200,
      this.game.renderer.height / 2 - 0,
      "area_3_thumbnail_text"
    );
    let area_4 = this.add.image(
      this.game.renderer.width / 2 - 200,
      this.game.renderer.height / 2 + 100,
      "area_4_thumbail"
    );
    let area_4_text = this.add.image(
      this.game.renderer.width / 2 + 60,
      this.game.renderer.height / 2 + 100,
      "area_4_thumbnail_text"
    );

    let backButton = this.add.image(
      100,
      this.game.renderer.height - 100,
      "back_button"
    );

    let hoverSprite = this.add.sprite(100, 100, "dude");
    hoverSprite.setVisible(false);

    this.anims.create({
      key: "walk",
      frameRate: 4,
      repeat: -1,
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 2 })
    });

    area_1.setInteractive();
    area_2.setInteractive();
    area_3.setInteractive();
    area_4.setInteractive();
    backButton.setInteractive();

    backButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = backButton.x + backButton.width;
      hoverSprite.y = backButton.y;
    });

    backButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });

    backButton.on("pointerup", () => {
      this.music.stop();
      this.scene.start("Menu");
    });

    area_1.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = area_1.x - area_1.width;
      hoverSprite.y = area_1.y;
    });

    area_1.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });
    area_1.on("pointerup", () => {
      practiceMode = true;
      this.music.stop();
      this.scene.start("Stage1");
    });

    area_2.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = area_2.x - area_2.width;
      hoverSprite.y = area_2.y;
    });

    area_2.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });
    area_2.on("pointerup", () => {
      practiceMode = true;
      this.music.stop();
      this.scene.start("Stage2");
    });

    area_3.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = area_3.x - area_3.width;
      hoverSprite.y = area_3.y;
    });

    area_3.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });
    area_3.on("pointerup", () => {
      practiceMode = true;
      this.music.stop();
      this.scene.start("Stage3");
    });
    area_4.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = area_4.x - area_4.width;
      hoverSprite.y = area_4.y;
    });

    area_4.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });
    area_4.on("pointerup", () => {
      practiceMode = true;
      this.music.stop();
      this.scene.start("Stage4");
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
