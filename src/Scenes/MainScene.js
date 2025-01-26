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
        super('playGame');
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
                this.damageMonster(1); // Reduce monster health by 2
            });

        // this.updateMonsterHealthText(monsterHealth);
    }

    // updateMonsterHealthText(monsterHealth) {
    //     // console.log("Slime health is now: " + monsterHealth);
    //     this.monsterHealthText.setText(`HP: ${monsterHealth}`);
    // }

    spawnMonster(monsterObj, x, y) {
        // Create monster text UI
        this.add.text(x, y, monsterObj.monsterType);
        this.monsterHealthText = this.add.text(x, y + 20, `HP: ${monsterObj.health}`);
        this.add.text(x, y + 40, `Attack Damage: ${monsterObj.monsterAttackDamage}`);

        // Store the monster's current health for tracking
        this.monsterHealth = monsterObj.health;

        // Optionally: Display a monster sprite if you have an asset
        // this.add.sprite(x + 50, y + 80, 'slimeMonsterSprite'); // Replace with your sprite's key
    }

    damageMonster(damage) {
        // Reduce monster health
        this.monsterHealth -= damage;

        // Update the monster's health text
        this.monsterHealthText.setText(`HP: ${this.monsterHealth}`);

        // Check if the monster is defeated
        if (this.monsterHealth <= 0) {
            this.onMonsterDefeated();
        }
    }

    onMonsterDefeated() {
        // Handle monster defeat logic
        this.add.text(200, 400, "The monster has been defeated!", { fill: "#f00" });
    }
}