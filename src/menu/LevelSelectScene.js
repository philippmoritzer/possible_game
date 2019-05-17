class LevelSelectScene extends Phaser.Scene {
  constructor() {
    super({ key: "LevelSelect" });
  }

  preload() {}
  create() {
    initBackgroundLayerArea1(this);

    this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height * 0.1,
      "select_level_logo"
    );

    let area_1 = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2 - 300,
      "area_1_thumbail"
    );
    let area_2 = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2 - 150,
      "area_2_thumbail"
    );
    let area_3 = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2 + 0,
      "area_3_thumbail"
    );
    let area_4 = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2 + 150,
      "area_4_thumbail"
    );

    this.add.image(100, this.game.renderer.height - 100, "back_button");

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

    area_1.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = area_1.x - area_1.width;
      hoverSprite.y = area_1.y;

      console.log("hover");
    });

    area_1.on("pointerout", () => {
      hoverSprite.setVisible(false);
      console.log("out");
    });
    area_1.on("pointerup", () => {
      this.scene.start("Stage1");
    });

    area_2.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = area_2.x - area_2.width;
      hoverSprite.y = area_2.y;
      console.log("hover");
    });

    area_2.on("pointerout", () => {
      hoverSprite.setVisible(false);
      console.log("out");
    });
    area_2.on("pointerup", () => {
      this.scene.start("Stage2");
    });

    area_3.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = area_3.x - area_3.width;
      hoverSprite.y = area_3.y;
      console.log("hover");
    });

    area_3.on("pointerout", () => {
      hoverSprite.setVisible(false);
      console.log("out");
    });
    area_3.on("pointerup", () => {
      this.scene.start("Stage3");
    });
    area_4.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = area_4.x - area_4.width;
      hoverSprite.y = area_4.y;
      console.log("hover");
    });

    area_4.on("pointerout", () => {
      hoverSprite.setVisible(false);
      console.log("out");
    });
    area_4.on("pointerup", () => {
      this.scene.start("Stage4");
    });
  }

  update() {}
}
