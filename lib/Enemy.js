const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

//returns enemy health info as print
Enemy.prototype.getHealth = function () {
    return `The ${this.name}'s health is now ${this.health}!`;
};

//returns enemy info on if alive
Enemy.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    return true;
};

//returns enemy's attack value
Enemy.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

//method to subtract from enemy health
Enemy.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

//method to show enemy weapon info
Enemy.prototype.getDescription = function () {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;