function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        return "You are eligible for the job";
    } else {
        return "Sorry, you are not eligible for the job";
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let age = parseInt(await getUserInput("Please enter your age: "));
    let experience = parseInt(await getUserInput("Please enter your years of experience: "));
    let qualification = await getUserInput("Please enter your qualification: ");
    console.log(isEligibleForJob(age, experience, qualification));
    readline.close();
})();
