"use strict";
const body = document.body;
const smile = document.getElementById('smile');
const list = document.getElementById('list');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const ul = document.getElementById('ul');
let result;
function actionHistory(num1, operator, num2, res) {
    let li = document.createElement('li');
    li.textContent = `${num1} ${operator} ${num2} = ${res}`;
    ul.append(li);
}
function calculation() {
    if (input1.value.length === 0 || input2.value.length === 0) {
        smile.textContent = '😕';
    }
    else {
        switch (list.value) {
            case '+':
                result = Number(input1.value) + Number(input2.value);
                break;
            case '-':
                result = Number(input1.value) - Number(input2.value);
                break;
            case '*':
                result = Number(input1.value) * Number(input2.value);
                break;
            case '/':
                result = Number(input1.value) / Number(input2.value);
                break;
            case '**':
                result = Number(input1.value) ** Number(input2.value);
                break;
        }
        if (isNaN(result)) {
            smile.textContent = '😕';
        }
        else if (!isFinite(result)) {
            smile.textContent = '😕';
        }
        else {
            actionHistory(Number(input1.value), list.value, Number(input2.value), result);
            smile.textContent = '😁';
        }
    }
}
list.addEventListener('input', calculation);
body.addEventListener('keyup', calculation);
