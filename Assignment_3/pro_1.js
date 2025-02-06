function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Invalid PIN entered";
    if (amount > balance) return "Not enough funds to complete the transaction";
    if (amount % 100 !== 0) return "Amount must be in increments of 100";

    balance -= amount;
    return `Transaction completed. New balance: $${balance}`;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let balance = parseFloat(await getUserInput("Enter your current balance: "));
    let amount = parseFloat(await getUserInput("Enter withdrawal amount: "));
    let enteredPin = parseInt(await getUserInput("Enter your PIN: "));

    const pin = 2704;

    console.log(atmWithdrawal(balance, amount, pin, enteredPin));

    readline.close();
})();
