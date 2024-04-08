function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Undefined";
    } else {
        return (a / b);
    }
}

let number1;
let number2;
let operator;

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "X") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

btns.forEach(button => {
    button.addEventListener('click', function () {
        display.textContent += button.textContent;
    })
})

const zero = document.querySelector('#zero');
zero.addEventListener('click', function () {
    display.textContent += zero.textContent;
})

const clear = document.querySelector("#clear");


clear.addEventListener('click', function () {
    display.textContent = "";
})

const equals = document.querySelector("#equals");

equals.addEventListener('click', function () {
    let text = display.textContent;
    console.log(text);
    let array = text.split('');
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "+" ||
            array[i] === "-" ||
            array[i] === "X" ||
            array[i] === "/"
        ) {
            operator = array[i];
            let firstArray = array.slice(0, i);
            console.log("First array before operator: " + firstArray);
            let numberOneString = firstArray.join('');
            console.log("Joined first values: " + numberOneString);
            number1 = parseInt(numberOneString);
            let secondArray = array.slice(i + 1, array.length - 1);
            console.log("Second array: " + secondArray);
            let numberTwoString = secondArray.join('');
            number2 = parseInt(numberTwoString);
        }
    }
    display.textContent = operate(number1, number2, operator);
    console.log(array);

})




