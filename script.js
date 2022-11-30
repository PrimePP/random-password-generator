const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower(),
  upper: getRandomUpper(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),
};

clipboardEl.addEventListener("click", () => {
  let text = resultEl.textContent;
  navigator.clipboard.writeText(text).then(
    () => {
      /* clipboard successfully set */
      alert('Your password is copied');
    }).catch((err)=>{
      alert('Some error occured')
    });
});

generateEl.addEventListener("click", () => {
  const userPassword = generatePassword(
    randomFunc.lower,
    randomFunc.upper,
    randomFunc.number,
    randomFunc.symbol,
    lengthEl.value
  );
  resultEl.textContent = userPassword;
});

//this generates the desired length password
function generatePassword(lower, upper, number, symbol, length) {
  if (length < 4 || length > 20) {
    alert(
      "The password must be atleast 4 characters or atmost 20 characters long. Try Again 🎉🎉"
    );
  }
  console.log("Inside generator", lower, upper, number, symbol, length);
  //
  const passwordVariables = [lower, upper, number, symbol];
  let userPassword = "";
  let passwordLength = Number(length);
  console.log(typeof Number(passwordLength), length);

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordVariables.length);
    userPassword += passwordVariables[randomIndex].charAt(
      Math.floor(Math.random() * passwordVariables[randomIndex].length)
    );
  }
  // console.log(userPassword);
  return userPassword;
}

//this generates random lower case letters
function getRandomLower() {
  let outputLowerString = "";
  const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < lowerCharacters.length; i++) {
    outputLowerString += lowerCharacters.charAt(
      Math.floor(Math.random() * lowerCharacters.length)
    );
  }
  return outputLowerString;
}
// getRandomLower();

//this generates random upper case letters
function getRandomUpper() {
  let outputUpperString = "";
  const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < upperCharacters.length; i++) {
    outputUpperString += upperCharacters.charAt(
      Math.floor(Math.random() * upperCharacters.length)
    );
  }
  return outputUpperString;
}
// getRandomUpper();

//this generates random numbers
function getRandomNumber() {
  let outputNumbers = "";
  const allNumbers = "0123456789";
  for (let i = 0; i < allNumbers.length; i++) {
    outputNumbers += allNumbers.charAt(
      Math.floor(Math.random() * allNumbers.length)
    );
  }
  return outputNumbers;
}
// getRandomNumber()

//this generates random symbols
function getRandomSymbol() {
  let outputCharacters = "";
  const specialCharacters = `!@#$%^&*_-+?.,~`;
  for (let i = 0; i < specialCharacters.length; i++) {
    outputCharacters += specialCharacters.charAt(
      Math.floor(Math.random() * specialCharacters.length)
    );
  }
  return outputCharacters;
}
// getRandomSymbol()
