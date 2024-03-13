const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let roman =[];
let romanStr;

const convert = num => {
    input.value = '';
  const reference = [
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
  for (var i = 0; i < reference.length ; i++) {
    if (num >= reference[i][0]) {
        roman.push(reference[i][1])
        console.log(roman);
      return reference[i][1] + convert(num - reference[i][0]);
    }
  }
};

/* Event initialize */
btn.addEventListener("click", () => {
    convert(input.value)
    output.classList.remove('hidden')
    /* TODO: turn roman to string and remove commas */
    romanStr = roman.split(',').join('')
    output.innerText = romanStr
});
