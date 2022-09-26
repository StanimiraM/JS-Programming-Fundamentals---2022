function type(word) {
  let typeOfParameter = typeof word;
  console.log(typeOfParameter);
  if (typeOfParameter == "string" || typeOfParameter == "number") {
    console.log(word);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}
type(18);
