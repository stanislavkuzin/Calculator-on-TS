
const body = <HTMLBodyElement>document.body;
const smile = <HTMLDivElement>document.getElementById('smile');
const list = <HTMLSelectElement>document.getElementById('list');
const input1 = <HTMLInputElement>document.getElementById('input1');
const input2 = <HTMLInputElement>document.getElementById('input2');
const ul = <HTMLUListElement>document.getElementById('ul');
let result: number;

function actionHistory(num1: number,operator: unknown,num2: number,res: number): void {
    let li = <HTMLLIElement>document.createElement('li');
    li.textContent = `${num1} ${operator} ${num2} = ${res}`;
    ul.append(li);
}

function calculation(): void {
    if (input1.value.length === 0 || input2.value.length === 0) {
        smile.textContent = '😕';
    } else {
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
        } else if (!isFinite(result)) {
            smile.textContent = '😕';
        } else {
            actionHistory(Number(input1.value), list.value, Number(input2.value), result);
            smile.textContent = '😁';
        }
    }
}

list.addEventListener('input', calculation)
body.addEventListener('keyup', calculation)