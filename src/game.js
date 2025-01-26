import Phaser from 'phaser';
import Scene1 from './Scenes/Scene1';
// import Scene2 from './Scenes/Scene2';
import MainScene from './Scenes/MainScene';

// // Example: Create a simple Phaser game
// const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   scene: {
//     preload: function () {
//       // this.load.image('logo', 'path/to/logo.png');
//     },
//     create: function () {
//       // const logo = this.add.image(400, 300, 'logo');
//     },
//   },
// };

// const game = new Phaser.Game(config);

window.onload = function () {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    // resolution: window.devicePixelRatio,
    // resolution: 2,
    // render: {
    //   pixelArt: true, // Enables pixel-perfect rendering
    //   antialias: false, // Disables anti-aliasing
    // },
    // render: 2,
    // scale: {
    //   mode: Phaser.Scale.FIT,
    //   autoCenter: Phaser.Scale.CENTER_BOTH,
    // },
    backgroundColor: 0x3e424b,
    scene: [Scene1, MainScene],
};

  const game = new Phaser.Game(config); // Instantiate the game with the configuration
}