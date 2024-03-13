const input = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const reference = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

const convert = num => {
    if (input.value === 0) {
        output.innerText = 'Please enter a number between 1 - 3999'
        output.classList.add('alert')
        return ''
    }
    output.classList.remove('alert')
    for (var i = 0; i < reference.length; i++) {
        if (num >= reference[i][0]) {
            return reference[i][1] + convert(num - reference[i][0]);
        }
    }
}


btn.addEventListener('click', () => {
    output.innerText = convert(input.value)
    output.classList.remove('hidden')
})
input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
    output.classList.remove('hidden')
    output.classList.toggle('alert')
    }
})