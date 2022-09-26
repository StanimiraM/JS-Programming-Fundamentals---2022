function rightPlace(firstString, char, secondString) {
  let newWord = firstString.replace("_", char);
  let result = secondString === newWord ? "Matched" : "Not Matched";
  console.log(result);
}
rightPlace("Str_ng", "I", "Strong");
