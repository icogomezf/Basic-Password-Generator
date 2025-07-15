const r = document.getElementById("resultado");
r.innerText = "********";

const characters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "1234567890",
  "!@#$%^&*",
];

function generatePassword() {
  // Define password lenth
  const lengtPw = generateLengt(8, 16);
  var passwordGenerated = "";

  //Asign first element with Uppercase character
  const beginElement = Math.floor(Math.random() * characters[0].length);
  let charactersLeng = characters.length;
  passwordGenerated = characters[0][beginElement];

  //Since the second char toward the last in random from characters array
  for (let i = 1; i < lengtPw; i++) {
    let firstIndex = Math.floor(Math.random() * charactersLeng);
    let secondIndex = Math.floor(Math.random() * characters[firstIndex].length);
    passwordGenerated += characters[firstIndex][secondIndex];
  }
  //show password
  r.innerText = passwordGenerated;
}

//Generate password lengt aleatory between min and max
function generateLengt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
