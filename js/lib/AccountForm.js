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

  this.depositForm = typeof options.depositForm !== 'undefined' ? options.depositForm : defaults.depositForm;
  this.withdrawForm = typeof options.withdrawForm !== 'undefined' ? options.withdrawForm : defaults.withdrawForm;
  this.account = typeof options.account !== 'undefined' ? options.account : defaults.account;

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
        amount = parseFloat(amountInput.value);

    try {
      _this.account.deposit(amount);
      _this.updateBalance();
    } catch(error) {
      _this.renderError(error, amountInput);
    }

  });

};

AccountForm.prototype.bindWithdrawEvent = function() {
  var _this = this;

  this.withdrawForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var amountInput = document.getElementById("withdraw_amount"),
        amount = parseFloat(amountInput.value);

    try {
      _this.account.withdraw(amount);
      _this.updateBalance();
    } catch(error) {
      _this.renderError(error, amountInput)
    }

  });

};

AccountForm.prototype.renderError = function(error, inputElem) {
  var currentErrors = document.getElementsByClassName("error"),
      errorElem = document.createElement("span");

  errorElem.className = "error";
  errorElem.innerHTML = "Error: " + error.message;

  for(var i = 0; i < currentErrors.length; i ++) {
    currentErrors[i].parentNode.removeChild(currentErrors[i]);
  }

  inputElem.parentNode.appendChild(errorElem);
};