const config = {
  type: Phaser.WEBGL, // Which renderer to use
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_WIDTH,
    height: GAME_HEIGHT
  },
  parent: "game-container",
  backgroundColor: "#E4F6F8",
  zoom: 1,
  physics: {
    default: "arcade",
    arcade: {
      tileBias: 32,
      gravity: { y: 5000 }
    }
  },
  scene: [
    GamePreload,
    MenuScene,
    LevelSelectScene,
    Stage1,
    Stage2,
    Stage3,
    Stage4
  ]
};

const game = new Phaser.Game(config);

let musicConfig = {
  mute: false,
  volume: 0.05,
  rate: 1,
  detune: 0,
  seek: 0,
  loop: false,
  delay: 0
};

let soundConfig = {
  mute: false,
  volume: 0.01,
  rate: 1,
  detune: 0,
  seek: 0,
  loop: false,
  delay: 0
};

console.log(
  "%cPOSSIBLE GAME - 1.0",

  "background: black; color: white; font-size: x-large; font-family: 'Arial'; padding: 50px;"
);

console.log(
  "%cBy Philipp Moritzer - Hannes Lesemann - Pascal Seegers",
  "background: black; color: white; font-size: large; padding: 25px;"
);

//useful code to debug
