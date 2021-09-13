(function() {
    'use strict';

    function transaction(amount) {
        this.balance += amount;
    }

    function createAccount(openingBalance) {
        return {
            balance: openingBalance,
            // performTranasction(amount) {
            //     this.balance += amount;
            // }
            performTransaction: amount => this.balance += amount
        };
    }



    const account1 = createAccount(1000);
    const account2 = createAccount(2000);


    // account1.performTranasction(100);
    // account1.performTranasction(-10);
    // account2.performTranasction(100);
    // account2.performTranasction(-10);

    transaction.call(account1, 100);
    transaction.call(account1, -10);

    const transactOnAccount1 = transaction.bind(account1);
    transactOnAccount1(100);

    const withdraw5fromaccount2 = transaction.bind(account2, -5);
    withdraw5fromaccount2();

    console.log(account1, account2);

})();