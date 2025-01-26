export class Player {
    constructor(name, playerClass, health, abilities, inventory) {
        this.name = name;
        this.playerClass = playerClass;
        this.health = health;
        this.abilities = abilities;
        this.inventory = inventory;
    }
}

export class Monster {
    constructor(monsterType, health, monsterAttackDamage) {
        this.monsterType = monsterType;
        this.health = health;
        this.monsterAttackDamage = monsterAttackDamage;
    }
}

export class Item {
    constructor(itemName, itemEffect, description) {
        this.itemName = itemName;
        this.itemEffect = itemEffect;
        this.description = description;
    }
}