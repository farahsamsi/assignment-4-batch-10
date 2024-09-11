/**problem 1*/
function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }

  let difference = income - expenses;
  let tax = difference * 0.2;
  return tax;
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));
// console.log(calculateTax(6000, 8000));

/** Problem 2 */
function sendNotification(email) {
  let splittingEmail = email.split("@");
  if (splittingEmail.length !== 2) {
    return "Invalid Email";
  }
  let userName = splittingEmail[0];
  let domainName = splittingEmail[1];
  return userName + " sent you an email from " + domainName;
}

// console.log(sendNotification('zihad@gmail.com'));
// console.log(sendNotification('farhan34@yahoo.com'));
// console.log(sendNotification('nadim.naem5@outlook.com'));
// console.log(sendNotification('fahim234.hotmail.com'));
// console.log(sendNotification('sadia8icloud.com'));
// console.log(sendNotification('sadia8ic@loud@.com'));

/** Problem 3 */
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  let testArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let result = false;
  for (let char of name) {
    if (testArray.includes(char)) {
      result = true;
    }
  }
  return result;
}

// console.log(checkDigitsInName('Raj123'));
// console.log(checkDigitsInName('n9ayeem'));
// console.log(checkDigitsInName('e1mu3'));
// console.log(checkDigitsInName('Suman'));
// console.log(checkDigitsInName('Name2024'));
// console.log(checkDigitsInName('!@#'));
// console.log(checkDigitsInName(["Raj"]));
// console.log(checkDigitsInName("R.aj"));

/** Problem 4 */
function calculateFinalScore(obj) {
  let result = false;
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    obj.testScore > 50 ||
    typeof obj.testScore !== "number" ||
    obj.schoolGrade > 30 ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let finalScore = 0;
  if (obj.isFFamily === true) {
    finalScore = obj.testScore + obj.schoolGrade + 20;
  } else {
    finalScore = obj.testScore + obj.schoolGrade;
  }
  if (finalScore >= 80) {
    result = true;
  }
  return result;
}

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,
//   })
// );
// console.log(calculateFinalScore("hello"));
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );

/** Problem 5 */
function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) === false ||
    typeof serialNumber !== "number" ||
    serialNumber < waitingTimes.length
  ) {
    return "Invalid Input";
  }

  let sum = 0;
  for (let time of waitingTimes) {
    sum = sum + time;
  }
  let average = Math.round(sum / waitingTimes.length);
  let remainingNumberCandidate = serialNumber - waitingTimes.length - 1;
  let timeRequired = average * remainingNumberCandidate;

  return timeRequired;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));

console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
