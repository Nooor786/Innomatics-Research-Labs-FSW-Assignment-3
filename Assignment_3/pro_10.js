function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let classCharge = 0;
    let luggageCharge = 0;

    // Additional charges based on class type
    if (classType === "Business") {
        classCharge = 200;
    } else if (classType === "First") {
        classCharge = 500;
    }

    // Charge for extra luggage (over 20kg)
    if (luggageWeight > 20) {
        luggageCharge = Math.ceil((luggageWeight - 20) / 10) * 50;
    }

    // Total fare calculation
    let totalFare = baseFare + classCharge + luggageCharge;

    // Apply discounts
    if (isStudent) {
        totalFare *= 0.85; // 15% discount for students
    } else if (isSenior) {
        totalFare *= 0.90; // 10% discount for seniors
    }

    return `Your final flight fare is: $${totalFare.toFixed(2)}`;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let classType = await getUserInput("Please enter the class type (Business/First): ");
    let luggageWeight = parseFloat(await getUserInput("Enter your luggage weight in kg: "));
    let isStudent = await getUserInput("Are you a student? (yes/no): ") === "yes";
    let isSenior = await getUserInput("Are you a senior citizen (above 60)? (yes/no): ") === "yes";

    console.log(calculateFlightFare(classType, luggageWeight, isStudent, isSenior));
    readline.close();
})();
