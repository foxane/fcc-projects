const form = document.getElementById("form");
const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

/* Roman reference */
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

/* main function */
const toRoman = (int) => {
  if (int <= 0) {
    return "";
  }
  for (var i = 0; i < ref.length; i++) {
    if (int >= ref[i][0]) {
      return ref[i][1] + toRoman(int - ref[i][0]);
    }
  }
};

/* validate user input */
const isValid = (str, int) => {
  let msg = "";
  if (!str || str.match(/[e.]/g)) {
    msg = "Please enter a valid number";
  } else if (int <= 0) {
    msg = "Please enter a number greater than or equal to 1";
  } else if (int > 3999) {
    msg = "Please enter a number less than or equal to 3999";
  } else {
    return true;
  }

  /* error msg */
  output.classList.add("alert");
  output.innerText = msg;
  return false;
};

/* execute */
function execute() {
  const numStr = input.value;
  const int = parseInt(numStr, 10);

  /* update output */
  input.value = "";
  output.classList.remove("hidden");

  if (isValid(numStr, int)) {
    output.classList.remove("alert");
    output.innerText = toRoman(int);
  }
}

/*  event listener */
btn.addEventListener("click", () => {
  execute();
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    execute();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  updateUI();
});
