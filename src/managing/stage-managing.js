function startCounter(time, scoreText) {
  var counter = 3;
  if (time > 1000) {
    counter = 2;
  }
  if (time > 2000) {
    counter = 1;
  }
  if (time > 3000) {
    counter = "Go!";
    scoreText.setText(counter);

    return true;
  }
  scoreText.setText(counter);

  return false;
}

function loadingBar(scene) {
  let loadingBar = scene.add.graphics({
    fillStyle: {
      color: 0x000000 // white;
    }
  });

  scene.load.on("progress", percent => {
    loadingBar.fillRect(
      0,
      scene.game.renderer.height / 2,
      scene.game.renderer.width * percent,
      50
    );
  });
}

function hitSpike(scene, sceneKey) {
  gameOver(scene, sceneKey);
}

function initBackgroundLayerArea1(scene) {
  scene.mountains_back = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2,
    2048,
    894,
    "mountains-back"
  );
  scene.mountains_mid1 = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2 + 200,
    2048,
    770,
    "mountains-mid1"
  );

  scene.clouds = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2,
    2048,
    500,
    "clouds"
  );
  scene.trees_2 = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT - 150,
    2048,
    500,
    "trees-2"
  );
  scene.trees_1 = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT - 250,
    2048,
    500,
    "trees-1"
  );
  scene.plain = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT - 350,
    2048,
    713,
    "mountains-mid2"
  );
}

function initBackgroundLayerArea2(scene) {
  scene.cameras.main.backgroundColor.setTo(56, 5, 5);

  scene.mountains_back = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2,
    2048,
    894,
    "mountains-back-desert"
  );
  scene.mountains_mid = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2 + 200,
    2048,
    770,
    "mountains-mid-desert"
  );

  scene.clouds = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2,
    2048,
    500,
    "clouds-dark"
  );
  scene.hills_2 = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT - 250,
    2048,
    500,
    "hills-desert-2"
  );
  scene.hills_1 = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT - 250,
    2048,
    500,
    "hills-desert-1"
  );
}

function initBackgroundLayerArea3(scene) {
  scene.cameras.main.backgroundColor.setTo(0, 37, 96);

  scene.mountains_back = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2,
    2048,
    894,
    "mountains-back-ice"
  );

  scene.mountains_mid = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2 + 200,
    2048,
    894,
    "mountains-mid-ice"
  );

  scene.clouds = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2,
    2048,
    500,
    "clouds"
  );
}

function initBackgroundLayerArea4(scene) {
  scene.cameras.main.backgroundColor.setTo(0, 0, 0);

  scene.earth = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2 + 300,
    364,
    337,
    "earth"
  );
  scene.mountains_mid = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2 + 200,
    2048,
    770,
    "mountains-mid-moon"
  );
  scene.landscape = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2 + 200,
    2048,
    713,
    "landscape-moon"
  );
}

function createBasicLevelSetup(scene) {
  scene.camera = scene.cameras.main;

  scene.belowLayer = scene.map.createStaticLayer(
    "Below player",
    scene.tileset,
    0,
    -1890
  );

  scene.spikeLayer = scene.map.createStaticLayer(
    "spikes",
    scene.tileset,
    0,
    -1890
  );
  scene.gravityLayer = scene.map.createStaticLayer(
    "gravity",
    scene.tileset,
    0,
    -1890
  );
  scene.finishLayer = scene.map.createStaticLayer(
    "finish",
    scene.tileset,
    0,
    -1890
  );

  scene.belowLayer.setCollisionByProperty({
    collides: true
  });

  scene.spikeLayer.setCollisionByProperty({
    deadly: true
  });
  scene.gravityLayer.setCollisionByProperty({
    gravity: true
  });
  scene.finishLayer.setCollisionByProperty({
    collides: true
  });

  scene.player = scene.physics.add.sprite(200, 200, "dude");

  scene.anims.create({
    key: "right",
    frames: scene.anims.generateFrameNumbers("dude", { start: 6, end: 8 }),
    frameRate: 5,
    repeat: -1
  });

  scene.anims.create({
    key: "up",
    frames: scene.anims.generateFrameNumbers("dude", { start: 1, end: 1 }),
    frameRate: 5,
    repeat: -1
  });
  scene.player.anims.play("right", true);

  scene.physics.add.collider(scene.player, scene.belowLayer);
  scene.camera.startFollow(scene.player);

  scene.counterText = scene.add.text(
    scene.camera.scrollX + GAME_WIDTH / 2,
    GAME_HEIGHT / 2,
    scene.counter,
    {
      fontSize: "72px",
      fill: "#fff"
    }
  );

  scene.cursors = scene.input.keyboard.createCursorKeys();
  scene.started = false;
  scene.input.on("pointerdown", () => {
    if (scene.player.body.blocked.down) {
      scene.player.setVelocityY(-1100);
      playJumpSound(this);
    } else if (scene.player.body.blocked.up) {
      playJumpSound(this);
      scene.player.setVelocityY(1100);
    }
  });

  scene.spacebar = scene.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.SPACE
  );

  scene.pause = false;

  scene.triesText = scene.add.text(16, 16, "Versuch:" + gameState.killCount, {
    fontSize: "32px",
    fill: "#fff"
  });
  if (practiceMode) {
    scene.triesText.setText("Practice Mode");
  }
  scene.stageText = scene.add.text(16, 64, scene.sceneKey, {
    fontSize: "32px",
    fill: "#fff"
  });
  scene.triesText.setScrollFactor(0);
  scene.stageText.setScrollFactor(0);
}

function gameOver(scene, sceneKey) {
  var sound = scene.sound.add("lose", soundConfig);
  sound.play();
  scene.gameWon = false;
  scene.music.stop();

  if (!practiceMode) {
    gameState.scene = sceneKey;
    gameState.killCount++;
  }
  localStorage.setItem("game-state", JSON.stringify(gameState));

  scene.physics.pause();
  scene.scene.start(scene);
}

function setSceneBackgroundRelativeToCameraArea1(scene) {
  var scrollY = scene.camera.scrollY;
  var scrollX = scene.camera.scrollX;
  var halfGameHeight = scrollY + GAME_HEIGHT / 2;
  var halfGameWidth = scrollX + GAME_WIDTH / 2;
  var baseGameHeight = scrollY + GAME_HEIGHT;
  scene.mountains_back.x = halfGameWidth;
  scene.mountains_back.y = halfGameHeight;
  scene.mountains_mid1.x = halfGameWidth;
  scene.mountains_mid1.y = halfGameHeight + 200;
  scene.clouds.x = halfGameWidth;
  scene.clouds.y = scrollY;
  scene.trees_2.x = halfGameWidth;
  scene.trees_2.y = baseGameHeight - 150;
  scene.trees_1.x = halfGameWidth;
  scene.trees_1.y = baseGameHeight - 250;
  scene.plain.x = halfGameWidth;
  scene.plain.y = baseGameHeight - 350;
}

function setSceneBackgroundRelativeToCameraArea2(scene) {
  var scrollY = scene.camera.scrollY;
  var scrollX = scene.camera.scrollX;
  var halfGameHeight = scrollY + GAME_HEIGHT / 2;
  var halfGameWidth = scrollX + GAME_WIDTH / 2;
  var baseGameHeight = scrollY + GAME_HEIGHT;
  scene.mountains_back.x = halfGameWidth;
  scene.mountains_back.y = halfGameHeight;
  scene.mountains_mid.x = halfGameWidth;
  scene.mountains_mid.y = halfGameHeight + 200;
  scene.clouds.x = halfGameWidth;
  scene.clouds.y = scrollY;
  scene.hills_2.x = halfGameWidth;
  scene.hills_2.y = baseGameHeight - 250;
  scene.hills_1.x = halfGameWidth;
  scene.hills_1.y = baseGameHeight - 250;
}

function setSceneBackgroundRelativeToCameraArea3(scene) {
  var scrollY = scene.camera.scrollY;
  var scrollX = scene.camera.scrollX;
  var halfGameHeight = scrollY + GAME_HEIGHT / 2;
  var halfGameWidth = scrollX + GAME_WIDTH / 2;
  var baseGameHeight = scrollY + GAME_HEIGHT;
  scene.clouds.x = halfGameWidth;
  scene.clouds.y = scrollY;
  scene.mountains_back.x = halfGameWidth;
  scene.mountains_back.y = halfGameHeight;
  scene.mountains_mid.x = halfGameWidth;
  scene.mountains_mid.y = halfGameHeight + 200;
}

function setSceneBackgroundRelativeToCameraArea4(scene) {
  var scrollY = scene.camera.scrollY;
  var scrollX = scene.camera.scrollX;
  var halfGameHeight = scrollY + GAME_HEIGHT / 2;
  var halfGameWidth = scrollX + GAME_WIDTH / 2;
  var baseGameHeight = scrollY + GAME_HEIGHT;
  scene.mountains_mid.x = halfGameWidth;
  scene.mountains_mid.y = halfGameHeight;
  scene.landscape.x = halfGameWidth;
  scene.landscape.y = baseGameHeight - 350;
  scene.earth.x = halfGameWidth;
  scene.earth.y = halfGameHeight;
}

function moveTilesArea1(scene) {
  scene.mountains_back.tilePositionX += 0.5;
  scene.mountains_mid1.tilePositionX += 1.3;
  scene.plain.tilePositionX += 3;
  scene.clouds.tilePositionX += 1;
  scene.trees_1.tilePositionX += 0.4;
  scene.trees_2.tilePositionX += 0.5;
}

function moveTilesArea2(scene) {
  scene.mountains_back.tilePositionX += 0.5;
  scene.mountains_mid.tilePositionX += 1;
  scene.clouds.tilePositionX += 1;
  scene.hills_1.tilePositionX += 1.8;
  scene.hills_2.tilePositionX += 1.3;
}

function moveTilesArea3(scene) {
  scene.mountains_back.tilePositionX += 0.5;
  scene.mountains_mid.tilePositionX += 1.3;
  scene.clouds.tilePositionX += 1;
}

function moveTilesArea4(scene) {
  scene.mountains_mid.tilePositionX += 0.5;
  scene.landscape.tilePositionX += 1.3;
}

function playJumpSound(scene) {
  var sound = scene.sound.add("jump", soundConfig);
  sound.play();
}

function initPauseScreen(scene) {
  scene.pause = !scene.pause;

  if (scene.pause) {
    scene.physics.pause();
    scene.pauseInfoText = scene.add.text(
      game.renderer.width * 0.3,
      100,
      "Game paused. Press 'space' to continue.",
      {
        fontSize: "32px",
        fill: "#fff"
      }
    );
    scene.quitText = scene.add.text(game.renderer.width - 200, 16, "Quit", {
      fontSize: "32px",
      fill: "#fff"
    });
    scene.pauseInfoText.setScrollFactor(0);
    scene.quitText.setScrollFactor(0);

    scene.quitText.setInteractive();

    scene.quitText.on("pointerup", () => {
      scene.music.stop();
      scene.scene.start("Menu");
    });
  } else {
    scene.pauseInfoText.destroy();
    scene.quitText.destroy();
    scene.physics.resume();
  }
}
