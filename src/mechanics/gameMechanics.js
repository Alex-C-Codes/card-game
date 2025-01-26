// Game Loop
export function spawnEnemy() {
    console.log('enemy spawned');

}

// Simplified Play Mechanics
export function simpleAttack(targetHealth, damage) {
    console.log("simple attack working. targetHealth: " + targetHealth, ". damage: " + damage);
    targetHealth -= damage;
    return targetHealth;
}

// Dice Play Mechanics
function rollDice(diceSides) {
    return 1 + Math.floor(Math.random() * diceSides);
}

const rollDice4 = () => rollDice(4);
const rollDice6 = () => rollDice(6);
const rollDice8 = () => rollDice(8);
const rollDice10 = () => rollDice(10);
const rollDice12 = () => rollDice(12);
const rollDice20 = () => rollDice(20);

export function rollToAttack() {
    // console.log("Player/Monster Rolls 1d20 to hit: " + rollDice20());
    rollDice20();
    // takeDamage(4);
}

function takeDamage(damageAmount) {
    this.health -= damageAmount;
    if (this.health <= 0) {
        this.health = 0;
        this.die();
    }
}

function heal(healAmount) {
    this.health += healAmount;
    if (this.health > this.maxHealth) {
        this.health = this.maxHealth;
    }
}

function die() {
    this.destroy();
}