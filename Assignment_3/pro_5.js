function calculateTicketPrice(age, showTime) {
    let price = 12; // Standard price

    // Matinee show discount (before 5 PM)
    if (showTime < 17) {
        price *= 0.8; // 20% discount for Matinee show
    }

    // Senior citizen discount (above 60)
    if (age > 60) {
        price *= 0.7; // 30% discount for senior citizens
    }

    // Child discount (below 12)
    if (age < 12) {
        price *= 0.6; // 40% discount for children
    }

    return price;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let age = parseInt(await getUserInput("Please enter the age: "));
    let showTime = parseInt(await getUserInput("Please enter the show time (in 24-hour format, e.g., 14 for 2 PM): "));
    console.log(`The final ticket price is: $${calculateTicketPrice(age, showTime).toFixed(2)}`);
    readline.close();
})();
