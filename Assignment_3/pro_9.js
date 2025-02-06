function calculateElectricityBill(units, timeOfDay) {
    let rate = 0;
    let isPeakHours = (timeOfDay >= 20 || timeOfDay < 8); // Peak hours: 8 PM - 8 AM

    // Determine the rate based on units
    if (units < 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    // Apply peak hours charge
    let bill = units * rate;
    if (isPeakHours) {
        bill *= 1.1; // Extra 10% during peak hours
    }

    return `Your total electricity bill is: $${bill.toFixed(2)}`;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let units = parseInt(await getUserInput("Please enter the number of units consumed: "));
    let timeOfDay = parseInt(await getUserInput("Please enter the time of day (in 24-hour format, e.g., 14 for 2 PM): "));
    console.log(calculateElectricityBill(units, timeOfDay));
    readline.close();
})();
