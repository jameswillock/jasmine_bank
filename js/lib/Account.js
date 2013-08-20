var Account = function(options) {

  /**********
  * OPTIONS *
  **********/
  options = options || {};

  var defaults = {
    startingBalance: 0
  };

  this.balance = typeof options.startingBalance !== 'undefined' ? options.startingBalance : defaults.startingBalance;

};

Account.prototype.isNumber = function(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

Account.prototype.isValidAmount = function(amount) {
  if (!this.isNumber(amount)) {
    throw new Error("AmountIsNotANumber");
  } else if (amount < 1) {
    throw new Error("AmountMustBePositive");
  } else {
    return true;
  }
};

Account.prototype.deposit = function(amount) {
  if (this.isValidAmount(amount)) {
    return this.balance += amount;
  }
};

Account.prototype.withdraw = function(amount) {
  if (this.isValidAmount(amount)) {
    if (amount <= this.balance) {
      return this.balance -= amount;
    } else {
      throw new Error("BalanceTooLow");
    }
  }
};

Account.prototype.getBalance = function() {
  return this.balance;
};

Account.prototype.getCreditLimit = function() {
  return (324 / 100) * this.balance;
};