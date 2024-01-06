const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const arabicToRoman = (num) => {
  const romanNumbers = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let romanNum = "";
  const keys = Object.keys(romanNumbers).sort((a, b) => b - a);

  for (let i = 0; i < keys.length; i++) {
    const currentNum = parseInt(keys[i]);
    while (num >= currentNum) {
      romanNum += romanNumbers[currentNum];
      num -= currentNum;
    }
  }
  return romanNum;
};

const showOutput = () => {
  if (number.value === "") {
    output.textContent = `Please enter a valid number`;
  } else if (number.value <= 0) {
    output.textContent = `Please enter a number greater than or equal to 1`;
  } else if (number.value > 3999) {
    output.textContent = `Please enter a number less than or equal to 3999`;
  } else {
    output.textContent = `${arabicToRoman(number.value)}`;
  }
};

convertBtn.addEventListener("click", showOutput);
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showOutput();
  }
});
