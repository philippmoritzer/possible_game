const config = {
  type: Phaser.AUTO, // Which renderer to use
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
    PreloadScene1,
    PreloadScene2,
    PreloadScene3,
    PreloadScene4,
    PreloadScene5,
    PreloadScene6,
    Stage1,
    Stage2,
    Stage3,
    Stage4,
    Stage5,
    Stage6
  ],
  render: {
    pixelArt: true
  }
};

const game = new Phaser.Game(config);

//useful code to debug
/*const debugGraphics = this.add.graphics().setAlpha(0.75);
belowLayer.renderDebug(debugGraphics, {
  tileColor: null, // Color of non-colliding tiles
  collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
  faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
});*/
