Jasmine Bank
============

A simple JavaScript bank account where you can make deposits and withdrawals. Test suite implemented on `complete` branch.

Running tests
-------------

Clone the repo and bootstrap a web server:

    git clone https://github.com/niceguyjames/jasmine_bank.git
    cd jasmine_bank
    python -m SimpleHTTPServer

Then visit [localhost:8000/test](http://localhost:8000/test) and see a failing spec.

Exercise
--------

Ignore the `AccountForm` class, it's the DOM bindings and event handlers that make the UI possible. We just want to test the `Account` which houses the business logic of the application.

1. Write unit tests for `Account`
    1. Creating an account
        1. It instantiates a new `Account` object
        2. It defines the `balance` property
        3. It returns a balance with `getBalance`
        4. When passed no options object
            1. It has a balance of zero
        5. When passed an options object with a `startingBalance`
            1. It has a balance of *x*
    2. Making a deposit
        1. It should accept a deposit and add the amount to the `balance`
        2. It should throw an error when adding a deposit of less than 1
    3. Making a withdrawal
        1. It should accept a withdrawal and subtract the amount from the `balance`
        2. It should throw an error if withdrawing more than the balance
        3. It should throw an error if withdrawing a less than zero
    4. Validating amounts
        1. It should be able to test if an amount is numeric with `isNumber`
        2. It should return false if an amount is not numeric with `isNumber`
        3. It should understand a number as a string with `isValidAmount`
        4. It should throw an error if parsing an empty string with `isValidAmount`
2. Write tests for a new method, `creditLimit`, which will return a credit limit representing **324%** of their current balance
3. Implement the `creditLimit` method in the Account object