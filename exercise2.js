// Nadindra Maulana Aziz

function splitText(text) {
  let result = [];

  for (let char of text) {
    if (char !== " ") {
      result.push(char.toLowerCase());
    }
  }

  return result;
}

function threeStepsAB(text) {
  const char = splitText(text);

  for (let i = 0; i < char.length; i++) {
    if (char[i] === "a") {
      if (char[i + 3] !== "b") {
        return false;
      }
      return true;
    }
  }

  return false;
}

console.log(threeStepsAB("lane borrowwed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("bacon and meat"));
