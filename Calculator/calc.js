const ac = document.getElementById('ac')
const btns = document.querySelectorAll('.btn')
const input = document.querySelector('.input')
const inputDiv = document.querySelector('.inputDiv')

const equal = document.getElementById('equal')
let string = ''
btns.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML === '=') {
            string = eval(string)
            input.value = string
        } else if (e.target.innerHTML === 'AC') {
            string = ''
            input.value = string
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1)
            input.value = string
        }
        else {
            string += e.target.innerHTML
            console.log(string)
            input.value = string
        }
    })
});
