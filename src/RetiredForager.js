var RetiredForagerBee = function() {
	ForagerBee.call(this);
	this.age = 40;
	this.job = 'gamble';
	this.canFly = false;
	this.color = 'grey';
};

RetiredForagerBee.prototype = new ForagerBee(ForagerBee.prototype);

RetiredForagerBee.prototype.forage = function(treasure) {
	return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
	this.treasureChest.push(treasure);
};

RetiredForagerBee.prototype.constructor = RetiredForagerBee;