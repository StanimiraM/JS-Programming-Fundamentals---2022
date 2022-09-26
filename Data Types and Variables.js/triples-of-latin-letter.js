function latinLetters(number) {
  let line = "";
  for (let i = 0; i < number; i++) {
    let firstLetter = String.fromCharCode(97 + i);
    for (let b = 0; b < number; b++) {
      let secondLetter = String.fromCharCode(97 + b);
      for (let c = 0; c < number; c++) {
        let thirdLetter = String.fromCharCode(97 + c);
        line = firstLetter + secondLetter + thirdLetter;
        console.log(line);
      }
    }
  }
}
latinLetters(3);
