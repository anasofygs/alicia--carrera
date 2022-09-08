var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/alicia-backgraund.jpeg");
  car1_img = loadImage("../assets/alicia.png");
  car2_img = loadImage("../assets/alicia.png");
  track = loadImage("../assets/track.png");
  fuelImage = loadImage("./assets/pocion.png");
  powerCoinImage = loadImage("./assets/galleta.png");
  obstacle1Image = loadImage("./assets/carta-negra.png");
  obstacle2Image = loadImage("./assets/carta roja.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/reina-roja.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
