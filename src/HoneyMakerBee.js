var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = new Bee(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot--;
};

HoneyMakerBee.prototype.constructor = HoneyMakerBee;