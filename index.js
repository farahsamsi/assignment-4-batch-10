// problem 1
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


/**Problem 2 */
function sendNotification(email){
    let splittingEmail = email.split('@');
    if(splittingEmail.length !== 2){
        return 'Invalid Email';
    }
    let userName = splittingEmail[0];
    let domainName = splittingEmail[1];
    return userName + ' sent you an email from ' + domainName;
    
}

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));
console.log(sendNotification('sadia8ic@loud@.com'));