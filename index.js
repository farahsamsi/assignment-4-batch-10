// problem 1
function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }

  let difference = income - expenses;
  let tax = difference * 0.2;
  return tax;
}

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
console.log(calculateTax(6000, 8000));
