import {fighterCard, monsterCard} from "../obj/obj";

const x = 20;
const y = 20;

export default class Scene2 extends Phaser.Scene {
    constructor() {
        super('playGame');
    }

    create() {
        let clickCount = 0;
        this.clickCountText = this.add.text(x, y*10, '');

        // debug log
        console.log('scene2 loaded');
        this.add.text(20, 20, "playing game...");

        // fighterCard display
        this.add.text(x, y*2, fighterCard.cardType);
        this.add.text(x, y*3, "HP:" + fighterCard.health);
        this.add.text(x, y*4, fighterCard.abilities);
        this.add.text(x, y*5.75, fighterCard.inventory);

        // monsterCard display
        this.add.text(x+300, y*2, monsterCard.cardType);
        this.add.text(x+300, y*3, "HP:" + monsterCard.health);
        this.add.text(x+300, y*4, monsterCard.abilities);
        this.add.text(x+300, y*5.75, monsterCard.inventory);

        // button
        const clickButton = this.add.text(x, y*6.75, "Click Here", {fill: '#0f0'}).setInteractive().on('pointerdown', () => this.updateClickCountText(++clickCount));

        this.updateClickCountText(clickCount);
    }
    
    updateClickCountText (clickCount) {
        this.clickCountText.setText(`Button has been clicked ${clickCount} tmies.`);
    }
}