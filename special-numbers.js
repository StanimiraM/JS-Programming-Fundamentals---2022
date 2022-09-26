function sumOfDigits(number) {
    let sum = 0;
    let numAsString = number.toString();
    for (let i = 0; i < numAsString.length; i++) {
      let digit = Number(numAsString[i]);
      sum += digit;
    }

    return sum;
}

function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let sum = sumOfDigits(i);
    let isSpecial = false;
    if (sum == 5 || sum == 7 || sum == 11) {
      isSpecial = true;
    }
    console.log(`${i} -> ${isSpecial ? "True" : "False"}`);
  }
}

specialNumbers(5);
