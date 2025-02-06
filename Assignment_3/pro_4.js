function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
        return 60; // Green for 60 seconds in heavy traffic
    } else if (density === "Moderate Traffic") {
        return 40; // Green for 40 seconds in moderate traffic
    } else if (density === "Light Traffic") {
        return 20; // Green for 20 seconds in light traffic
    } else {
        return "Invalid traffic density";
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
    let density = await getUserInput("Please enter traffic density (Heavy Traffic, Moderate Traffic, Light Traffic): ");
    console.log(`The green light will stay on for: ${trafficLightControl(density)} seconds.`);
    readline.close();
})();
