import fighterCard from "../gameObjects/gameObjects";

export default class Scene2 extends Phaser.Scene {
    constructor() {
        super('playGame');
    }

    create() {
        console.log('scene2 loaded');
        this.add.text(20, 20, "playing game...");
        this.add.text(20, 40, fighterCard.cardType);
        this.add.text(20, 60, "HP:" + fighterCard.health);
        this.add.text(20, 80, fighterCard.abilities);
        this.add.text(20, 115, fighterCard.inventory);
    }
}