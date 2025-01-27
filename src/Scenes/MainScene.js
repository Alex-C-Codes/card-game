import {Player } from "../obj/classes";
import {slimeMonster} from "../obj/monsterObj";
import {rollToAttack, simpleAttack} from "../mechanics/gameMechanics";

const player = new Player(
    "Maria",
    "Fighter",
    13,
    ["Attack", "Run"],
    "Healing Potion",
);

// Display settings
const x = 20;
const y = 20;

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('startGame');
    }

    create() {
        let monsterHealth = slimeMonster.health;

        // debug logs
        console.log(slimeMonster.health);

        // Display initial UI
        this.add.text(200, 20, "Tales of Arland: Cards of Chaos");

        // playerCard display
        this.add.text(x, y*2, player.playerClass);
        this.add.text(x, y*3, `HP: ${player.health}`);
        this.add.text(x, y*4, player.abilities);
        this.add.text(x, y*6, player.inventory);

        // Spawn the monster
        this.spawnMonster(slimeMonster, x + 300, y * 2);

        // Player attack button
        const playerAttackButton = this.add
            .text(x, y * 8, "Player Attack", { fill: "#0f5" })
            .setInteractive()
            .on("pointerdown", () => {
                this.damageMonster(1); // Reduce monster health by 1
            });
    }

    spawnMonster(monsterObj, x, y) {
        // Create monster text UI
        this.monsterTypeText = this.add.text(x, y, monsterObj.monsterType);
        this.monsterHealthText = this.add.text(x, y + 20, `HP: ${monsterObj.health}`);
        this.monsterDamageText = this.add.text(x, y + 40, `Attack Damage: ${monsterObj.monsterAttackDamage}`);

        // Optionally: Add a sprite for the monster
        this.monsterSprite = this.add.rectangle(x + 50, y + 80, 50, 50, 0x00ff00); // Placeholder red square
        // Use actual sprites if you have them
        // this.monsterSprite = this.add.sprite(x + 50, y + 80, 'monsterSpriteKey');

        // Store the monster's current health for tracking
        this.monsterHealth = monsterObj.health;
    }

    damageMonster(damage) {
        // Reduce monster health
        this.monsterHealth -= damage;

        // Update the monster's health text
        this.monsterHealthText.setText(`HP: ${this.monsterHealth}`);

        // Check if the monster is defeated
        if (this.monsterHealth <= 0) {
            this.destroyMonster();
            this.spawnMonster(slimeMonster, x + 300, y * 2);
        }
    }

    destroyMonster() {
        // Remove all monster-related game objects
        this.monsterTypeText.destroy();
        this.monsterHealthText.destroy();
        this.monsterDamageText.destroy();
        this.monsterSprite.destroy(); // Destroy the sprite (if used)

        // Optional: Add feedback for the monster's defeat
        this.add.text(200, 400, "The monster has been defeated!", { fill: "#f00" });
    }
}