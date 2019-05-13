class GamePreload extends Phaser.Scene {
  constructor() {
    super({ key: "GamePreload" });
  }

  preload() {
    // Runs once, loads up assets like images and audio

    this.load.spritesheet("dude", "assets/sprites/character.png", {
      frameWidth: 48,
      frameHeight: 48
    });
    this.load.image("tileset", "assets/tilesets/Platformer tiles.png");

    this.load.image("title_bg", "./assets/gui/title_bg.jpg");
    this.load.image("options_button", "./assets/gui/options_button.png");
    this.load.image("play_button", "./assets/gui/play_button.png");
    this.load.image("logo", "./assets/gui/logo.png");

    this.load.image("back_button", "./assets/gui/back_button.png");
    this.load.image(
      "select_level_button",
      "./assets/gui/select_level_button.png"
    );
    this.load.image("select_level_logo", "./assets/gui/select_level_logo.png");

    this.load.image(
      "area_1_thumbail",
      "./assets/gui/levelselect/mountains_3d.png"
    );
    this.load.image(
      "area_2_thumbail",
      "./assets/gui/levelselect/desert_3d.png"
    );

    this.load.image(
      "mountains-back",
      "assets/images/background_layer/stage_1/mountains-back.png"
    );
    this.load.image(
      "mountains-mid1",
      "assets/images/background_layer/stage_1/mountains-mid1.png"
    );
    this.load.image(
      "mountains-mid2",
      "assets/images/background_layer/stage_1/mountains-mid2.png"
    );
    this.load.image(
      "clouds",
      "assets/images/background_layer/stage_1/clouds.png"
    );
    this.load.image(
      "trees-1",
      "assets/images/background_layer/stage_1/trees_1.png"
    );
    this.load.image(
      "trees-2",
      "assets/images/background_layer/stage_1/trees_2.png"
    );

    this.load.image(
      "hills-desert-1",
      "assets/images/background_layer/stage_2/hills-desert-1.png"
    );
    this.load.image(
      "hills-desert-2",
      "assets/images/background_layer/stage_2/hills-desert-2.png"
    );
    this.load.image(
      "mountains-back-desert",
      "assets/images/background_layer/stage_2/mountains-back-desert.png"
    );
    this.load.image(
      "mountains-mid-desert",
      "assets/images/background_layer/stage_2/mountains-mid-desert.png"
    );
    this.load.image(
      "plain-desert",
      "assets/images/background_layer/stage_2/plain-desert.png"
    );

    this.load.tilemapTiledJSON("map", "assets/tilemaps/level_1.json");
    this.load.tilemapTiledJSON("map2", "assets/tilemaps/level_2.json");

    loadingBar(this);
  }
  create() {
    this.scene.start("Menu");
  }
}
