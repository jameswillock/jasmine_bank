describe("Account", function() {

  var account,
      accountWithBalance;

  beforeEach(function() {
    account = new Account();
    accountWithBalance = new Account({
      startingBalance: 1000
    });
  });

  describe("when creating", function(){
    it("should create a new Account", function() {
      expect(account instanceof Account).toBeTruthy();
    });

    it("should have a balance property", function() {
      expect(account.balance).toBeDefined();
    });

    it("should return a balance", function() {
      expect(account.getBalance()).toEqual(0);
    });

    describe("with no starting balance", function() {
      it("should have a balance of 0", function() {
        expect(account.balance).toEqual(0);
      });
    });

    describe("with a starting balance", function() {
      it("should have a balance of more than 0", function() {
        expect(accountWithBalance.balance).toBeGreaterThan(0);
      });
    });
  });

  describe("when making a deposit", function() {
    it("should accept a deposit and add the amount to the balance", function() {
      var currentBalance = account.balance,
          amount = 100;

      account.deposit(amount);
      expect(account.balance).toEqual(currentBalance + amount);
    });

    it("should throw an error when adding a deposit of less than 1", function() {
      expect(function(){
        account.deposit(0);
      }).toThrow(Error("AmountMustBePositive"));
    });
  });

  describe("when making a withdrawal", function() {
    it("should accept a withdrawal and subtract the amount from the balance", function() {

      var currentBalance = accountWithBalance.balance,
          amount = 50;

      accountWithBalance.withdraw(amount);
      expect(accountWithBalance.balance).toEqual(currentBalance - amount);
    });

    it("should throw an error if withdrawing more than the balance", function() {
      var amount = account.balance + 1;

      expect(function(){
        account.withdraw(amount);
      }).toThrow(Error("BalanceTooLow"));
    });

    it("should throw an error if withdrawing a less than zero", function() {
      expect(function(){
        account.withdraw(0);
      }).toThrow(Error("AmountMustBePositive"));
    });
  });

  describe("when validating amounts", function() {
    it("should be able to test if an amount is numeric", function() {
      expect(account.isNumber(42)).toBeTruthy();
    });

    it("should return false if an amount is not numeric", function() {
      expect(account.isNumber("Hello")).toBeFalsy();
    });

    it("should understand a number as a string", function() {
      expect(account.isValidAmount("42")).toBeTruthy();
    });

    it("should throw an error if parsing an empty string", function() {
      expect(function(){
        account.isValidAmount("");
      }).toThrow(Error("AmountIsNotANumber"));
    });
  });

  it("should return a credit limit", function() {
    expect(accountWithBalance.getCreditLimit()).toEqual(3240);
  });

});