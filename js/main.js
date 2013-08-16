var account = new Account({
  startingBalance: 200
});

window.onload = function() {
  new AccountForm({
    depositForm: document.getElementById("deposit_form"),
    withdrawForm: document.getElementById("withdraw_form"),
    account: account
  });
};