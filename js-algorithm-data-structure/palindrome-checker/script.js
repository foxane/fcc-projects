const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome(inputVal) {
    const origin = inputVal;
    input.value = '';
    if (inputVal === '') {
        alert('Please input a value')
    }
    const cleanStr = inputVal.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultText = `<span class="result">${origin}</span> is ${cleanStr === [...cleanStr].reverse().join('') ? "a" : "not a"} Palindrome`
    result.innerHTML = resultText
}

button.addEventListener("click", () => {
    checkPalindrome(input.value);
})

// execute when enter key is pressed
input.addEventListener("keyup", enter => {
    enter.preventDefault();
    if (enter.key === 'Enter') {
        checkPalindrome(input.value);
    }
});