function amazingNumbers(number) {
  let num = number.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    let digit = Number(num[i]);
    sum += digit;
  }
  let result = sum.toString().includes("9");

  console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbers(1233);
