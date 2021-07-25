const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arrCode = [];
  for (let i = 0; i < expr.length; i += 10) {
    let morse = "";
    for (let j = i; j < i + 10; j += 2) {
      let fragment = `${expr[j]}${expr[j + 1]}`;
      if (fragment === "00") morse += "";
      if (fragment === "10") morse += ".";
      if (fragment === "11") morse += "-";
      if (fragment === "**") morse += "**";
    }
    arrCode.push(morse);
  }

  let phrase = "";
  for (let i = 0; i < arrCode.length; i++) {
    if (arrCode[i] !== "**********") {
      phrase += `${MORSE_TABLE[arrCode[i]]}`;
    } else {
      phrase += " ";
    }
  }

  return phrase;
}

module.exports = {
  decode,
};
