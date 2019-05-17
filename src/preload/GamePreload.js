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
    this.load.image("options_button", "./assets/gui/options_button.png");
    this.load.image("play_button", "./assets/gui/play_button.png");
    this.load.image("logo", "./assets/gui/logo.png");
    this.load.image("back_button", "./assets/gui/back_button.png");
    this.load.image("highscore_button", "./assets/gui/highscore_button.png");
    this.load.image(
      "resume_game_button",
      "./assets/gui/resume_game_button.png"
    );
    this.load.image(
      "select_level_button",
      "./assets/gui/select_level_button.png"
    );

    this.load.image(
      "area_1_thumbail",
      "./assets/gui/levelselect/mountains.png"
    );
    this.load.image("area_2_thumbail", "./assets/gui/levelselect/desert.png");
    this.load.image("area_3_thumbail", "./assets/gui/levelselect/ice.png");
    this.load.image("area_4_thumbail", "./assets/gui/levelselect/moon.png");

    this.load.image(
      "select_level_subtitle",
      "./assets/gui/select_level_subtitle.png"
    );

    this.load.image(
      "area_1_thumbnail_text",
      "./assets/gui/levelselect/mountains_text.png"
    );
    this.load.image(
      "area_2_thumbnail_text",
      "./assets/gui/levelselect/desert_text.png"
    );
    this.load.image(
      "area_3_thumbnail_text",
      "./assets/gui/levelselect/ice_text.png"
    );
    this.load.image(
      "area_4_thumbnail_text",
      "./assets/gui/levelselect/moon_text.png"
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
    this.load.image(
      "clouds-dark",
      "assets/images/background_layer/stage_2/clouds-dark.png"
    );

    this.load.image(
      "mountains-back-ice",
      "assets/images/background_layer/stage_3/mountains-back-ice.png"
    );
    this.load.image(
      "mountains-mid-ice",
      "assets/images/background_layer/stage_3/mountains-mid-ice.png"
    );

    this.load.image(
      "ice-2",
      "assets/images/background_layer/stage_3/ice-2.png"
    );

    this.load.image(
      "mountains-mid-moon",
      "assets/images/background_layer/stage_4/mountains-mid-moon.png"
    );
    this.load.image(
      "landscape-moon",
      "assets/images/background_layer/stage_4/landscape-moon.png"
    );
    this.load.image(
      "earth",
      "assets/images/background_layer/stage_4/earth.png"
    );

    this.load.tilemapTiledJSON("map1", "assets/tilemaps/level_1.json");
    this.load.tilemapTiledJSON("map2", "assets/tilemaps/level_2.json");
    this.load.tilemapTiledJSON("map3", "assets/tilemaps/level_3.json");
    this.load.tilemapTiledJSON("map4", "assets/tilemaps/level_4.json");

    loadingBar(this);
  }
  create() {
    this.scene.start("Menu");
  }
}
