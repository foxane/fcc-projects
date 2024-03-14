const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const ref = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

const toRoman = (int) => {
  if (int <= 0) {
    return ''
  }
  for (var i = 0; i < ref.length; i++) {
    if(int >= ref[i][0]) {
      return ref[i][1] + toRoman(int - ref[i][0])
    }
  }
}

const isValid = (str, int) => {
  let msg = ''
  if (!str || str.match(/[e.]/g)) {
      msg = 'Please enter a valid number'
  } else if (int <= 0) {
      msg = 'Roman numerals dont have 0'
  } else if (int > 3999) {
      msg = 'Roman numerals have max of 3999'
  } else {
      return true;
  }
  output.classList.add('alert')
  output.innerText = msg;
  return false;
}

btn.addEventListener('click', () => {
  const numStr = input.value;
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden')
  if (isValid(numStr, int)) {
      output.innerText = toRoman(int);
  }
})