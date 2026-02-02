// it is use for data privacy and lexical environment 

function bankAccount() {

    let balance = 1000;

    return {
        deposit(amount) {
            balance+=amount;
        },
        getbalance(){
            return balance;
        }
    };
}

const acc=bankAccount();

acc.deposit(230)
console.log(acc.getbalance());

