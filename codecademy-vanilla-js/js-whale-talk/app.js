const input = "Shake your booty";
const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length ; inputIndex++) {
  for (let vowel = 0; vowel < vowels.length; vowel++) {
    if (input[inputIndex] === vowels[vowel]) {
      resultArray.push(input[i]) {
        if (input[inputIndex] === "e") {
            resultArray.push("ee");
            } else if (input[inputIndex] === "u") {
            resultArray.push("uu");           
    } else {
      resultArray.push(input[inputIndex]);
    }
      }
    }
  };
};

console.log(resultArray);