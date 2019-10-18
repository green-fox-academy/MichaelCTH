'use strict';

class DiceSet {

	constructor() {
		this.numOfDices = 6;
	}

	roll() {
		this.dice = [];
		for (let i = 0; i < this.numOfDices; i++) {
			this.dice.push(Math.floor(Math.random() * 6 + 1));
		}
		return this.dice;
	}

	reroll(index) {
		if (index === undefined) {
			for (let i = 0; i < this.numOfDices; i++) {
				this.dice[i] = Math.floor(Math.random() * 6 + 1);
			}
		} else {
			this.dice[index] = Math.floor(Math.random() * 6 + 1);
		}
	}

	getCurrent(index) {
		if (index === undefined) {
			for (let i = 0; i < this.numOfDices; i++) {
				return this.dice;
			}
		} else {
			return this.dice[index];
		}
	}
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll(), do this first to get your array of dices
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

function diceSetCheck(diceSet) {
	let len = diceSet.length;
	for (let i = 0; i < len; i++) {
		if (diceSet[i] !== 6) {
			return i;
		}
	}
	return -1;
}

const diceSet = new DiceSet();
console.log(diceSet.roll());
while (true) {
	let idx = diceSetCheck(diceSet.getCurrent());
	if (idx === -1) {
		break;
	}
	diceSet.reroll(idx);
}

console.log(diceSet.getCurrent());