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
    console.log(percent);
  });
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
    "clouds"
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
  scene.plain = scene.add.tileSprite(
    GAME_WIDTH / 2,
    GAME_HEIGHT - 350,
    2048,
    713,
    "plain-desert"
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
    frameRate: 60,
    repeat: -1
  });
  scene.player.anims.play("right", true);

  scene.physics.add.collider(scene.player, scene.belowLayer);
  scene.camera.startFollow(scene.player);
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
  scene.hills_2.y = baseGameHeight - 150;
  scene.hills_1.x = halfGameWidth;
  scene.hills_1.y = baseGameHeight - 250;
  scene.plain.x = halfGameWidth;
  scene.plain.y = baseGameHeight - 350;
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
  scene.mountains_mid.tilePositionX += 1.3;
  scene.plain.tilePositionX += 3;
  scene.clouds.tilePositionX += 1;
  scene.hills_1.tilePositionX += 0.4;
  scene.hills_2.tilePositionX += 0.5;
}
