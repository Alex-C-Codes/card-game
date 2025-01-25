export default class Scene1 extends Phaser.Scene {
    constructor() {
        super('bootGame');
    }

    preload() {
        console.log('pre-load worked');
        // this.load.image('stairs','./assets/images_2d/stairs.png');
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start('playGame');
    }
}

// export default Scene1;