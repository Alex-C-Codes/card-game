import Phaser from 'phaser';
import Scene1 from './Scenes/Scene1';
import Scene2 from './Scenes/Scene2';

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
    backgroundColor: 0xc5e3ec,
    scene: [Scene1, Scene2],
};

  const game = new Phaser.Game(config); // Instantiate the game with the configuration
}