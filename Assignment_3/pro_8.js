function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    let planSuggestion = "";

    if (planType === "Basic") {
        planSuggestion = "Basic plan: $20/month - Access to gym only.";
    } else if (planType === "Premium" && wantsTrainer) {
        planSuggestion = "Premium plan: $50/month - Access to gym + Personal Trainer.";
    } else if (planType === "VIP" && wantsTrainer && wantsDietPlan) {
        planSuggestion = "VIP plan: $80/month - Access to gym + Personal Trainer + Diet Plan.";
    } else {
        planSuggestion = "Please check your selections, something went wrong.";
    }

    return planSuggestion;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let planType = await getUserInput("Which membership plan do you prefer? (Basic, Premium, VIP): ");
    let wantsTrainer = await getUserInput("Would you like a personal trainer? (yes/no): ");
    let wantsDietPlan = await getUserInput("Would you like a diet plan? (yes/no): ");

    console.log(choosePlan(planType, wantsTrainer === "yes", wantsDietPlan === "yes"));
    readline.close();
})();
