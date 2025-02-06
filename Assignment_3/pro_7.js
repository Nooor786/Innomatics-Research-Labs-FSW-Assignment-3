function applyCoupon(orderAmount, couponCode) {
    let discount = 0;
    let shippingCost = 10; // Default shipping cost

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = orderAmount * 0.10; // 10% off for orders above $500
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        shippingCost = 0; // Free shipping for orders above $200
    } else if (couponCode !== "DISCOUNT10" && couponCode !== "FREESHIP") {
        return "Invalid coupon code";
    }

    let finalPrice = orderAmount - discount + shippingCost;
    return `The final price after applying the coupon is: $${finalPrice.toFixed(2)}`;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let orderAmount = parseFloat(await getUserInput("Please enter the order amount: "));
    let couponCode = await getUserInput("Please enter the coupon code: ");
    console.log(applyCoupon(orderAmount, couponCode));
    readline.close();
})();
