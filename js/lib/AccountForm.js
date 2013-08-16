/*****************************
* ACCOUNT FORM PARENT OBJECT *
*****************************/
var AccountForm = function(options) {

  /**********
  * OPTIONS *
  **********/
  options = options || {};

  var defaults = {
    depositForm: document.getElementById("deposit_form"),
    withdrawForm: document.getElementById("withdraw_form"),
    account: new Account(100)
  };

  this.depositForm = options.depositForm || defaults.depositForm;
  this.withdrawForm = options.withdrawForm || defaults.withdrawForm;
  this.account = options.account || defaults.account;

  /*************
  * INITIALIZE *
  *************/
  this.updateBalance();
  this.bindDepositEvent();
  this.bindWithdrawEvent();

};

AccountForm.prototype.updateBalance = function() {
  var balance = this.account.getBalance();
  document.getElementById("account_amount").innerHTML = balance;
};

AccountForm.prototype.bindDepositEvent = function() {
  var _this = this;

  this.depositForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var amountInput = document.getElementById("deposit_amount"),
        amount = parseInt(amountInput.value, 10);

    try {
      _this.account.deposit(amount);
      _this.updateBalance(account);
    } catch(e) {
      alert(e);
    }

  });

};

AccountForm.prototype.bindWithdrawEvent = function() {
  var _this = this;

  this.withdrawForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var amountInput = document.getElementById("withdraw_amount"),
        amount = parseInt(amountInput.value, 10);

    try {
      _this.account.withdraw(amount);
      _this.updateBalance(account);
    } catch(e) {
      alert(e);
    }

  });

};