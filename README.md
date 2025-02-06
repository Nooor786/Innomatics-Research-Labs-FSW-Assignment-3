<h1 align="center">Innomatics-Research-Labs-FSW-Assignment-3 😊 </h1>


## 1. ATM Withdrawal System
### Scenario:
A customer wants to withdraw money from an ATM. Write a function atmWithdrawal(balance, amount, pin, enteredPin) that checks:
If enteredPin matches pin, proceed. Otherwise, return "Incorrect PIN"
If amount > balance, return "Insufficient Funds"
If amount is a multiple of 100, allow withdrawal, else return "Enter amount in multiples of 100"

## 2. Online Shopping Discount & Free Shipping
### Scenario:
An online store offers the following:
Discounts:
20% for orders above $1000
10% for orders between $500 and $1000
No discount below $500
Free shipping for orders above $50
Express shipping ($10) for all orders below $50
Write a function calculateFinalAmount(orderAmount) that returns the final payable amount after discount and applicable shipping charges.

## 3. Student Grading System with Extra Credit
### Scenario:
A school assigns grades based on marks and awards extra credit if attendance is above 90%.
Grading:
90+ → "A"
80-89 → "B"
70-79 → "C"
60-69 → "D"
Below 60 → "F"
If attendance is above 90%, add 5 extra marks
Write a function calculateGrade(marks, attendance) that returns the student's final grade.

## 4. Smart Traffic Light System
### Scenario:
A smart traffic light changes signals based on traffic density:
"Heavy Traffic" → Green for 60 seconds
"Moderate Traffic" → Green for 40 seconds
"Light Traffic" → Green for 20 seconds
Write a function trafficLightControl(density) that returns how long the green signal will stay on.

## 5. Movie Ticket Pricing with Time and Age Discount
### Scenario:
A movie theater offers tickets with dynamic pricing:
Standard price: $12
Matinee show (before 5 PM) → 20% discount
Senior citizens (above 60) → 30% discount
Children (below 12) → 40% discount
Write a function calculateTicketPrice(age, showTime) that returns the final ticket price.

## 6. Job Application Filter
### Scenario:
A company is hiring and requires candidates to meet the following conditions:
Age must be between 21 and 55
Experience must be at least 2 years
Minimum qualification: "Bachelor's Degree"
Write a function isEligibleForJob(age, experience, qualification) that returns whether the applicant is eligible.

## 7. E-commerce Coupon Redemption
### Scenario:
An e-commerce store offers coupon-based discounts:
Coupon "DISCOUNT10" → 10% off for orders above $500
Coupon "FREESHIP" → Free shipping for orders above $200
Both coupons cannot be used together
Write a function applyCoupon(orderAmount, couponCode) that calculates the final price.

## 8. Fitness Membership Plan
### Scenario:
A gym offers different membership plans:
Basic ($20/month) → Only gym access
Premium ($50/month) → Gym + Personal Trainer
VIP ($80/month) → Gym + Trainer + Diet Plan
Write a function choosePlan(planType, wantsTrainer, wantsDietPlan) that suggests the best membership.

## 9. Electricity Bill Calculation with Peak Hours
### Scenario:
An electricity board charges differently based on consumption and time:
Normal hours (8 AM - 8 PM)
Below 100 units → $5 per unit
100-300 units → $4 per unit
Above 300 units → $3 per unit
Peak hours (8 PM - 8 AM) → Extra 10% charge on all rates
Write a function calculateElectricityBill(units, timeOfDay) that returns the total bill.

## 10. Flight Ticket Booking System
### Scenario:
A flight booking system applies the following rules:
Base fare: $300
Additional charges:
Business class: +$200
First class: +$500
Luggage over 20kg: +$50 per 10kg extra
Discounts:
Students → 15% off
Seniors (above 60 years old) → 10% off
Write a function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) that returns the final price.

