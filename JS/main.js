const receptor = document.getElementById("Receptor");
let operador = '';
let valor1 = '';
let valor2 = '';
let resultado = 0;
let operando = false;
let contador = 0;

document.querySelectorAll("input[type='button']").forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.value;

        if (!isNaN(valor)) {
            if (operando) {
                valor2 += valor;
                receptor.value = valor2;
            } else {
                valor1 += valor;
                receptor.value = valor1;
            }
        } else if (valor === '.') {
            if (operando && !valor2.includes('.')) {
                valor2 += valor;
                receptor.value = valor2;
            } else if (!operando && !valor1.includes('.')) {
                valor1 += valor;
                receptor.value = valor1;
            }
        } else if (valor === 'AC') {
            valor1 = '';
            valor2 = '';
            operador = '';
            resultado = 0;
            operando = false;
            receptor.value = '0';
        } else if (valor === 'Del') {
            if (operando) {
                valor2 = valor2.slice(0, -1);
                receptor.value = valor2 || '0';
            } else {
                valor1 = valor1.slice(0, -1);
                receptor.value = valor1 || '0';
            }
        } else if (valor === '=') {
            resultado = calcular(valor1, operador, valor2);
            receptor.value = resultado;
            valor1 = resultado.toString();
            valor2 = '';
            operando = false;
        } else if (valor === '-') {
            if (operando) {
                if (valor2.startsWith('-')) {
                    valor2 = valor2.slice(1); 
                } else {
                    valor2 = '-' + valor2; 
                }
                receptor.value = valor2;
            } else {
                if (valor1.startsWith('-')) {
                    valor1 = valor1.slice(1);
                } else {
                    valor1 = '-' + valor1; 
                }
                receptor.value = valor1;
            }
        } else {
            operador = valor;
            operando = true;
        }
    });
});

function calcular(v1, operador, v2) {
    let product = 0;
    switch (operador) {
        case '+':
            product = parseFloat(v1) + parseFloat(v2);
            break;
        case '-':
            product = parseFloat(v1) - parseFloat(v2);
            break;
        case '×':
            product = parseFloat(v1) * parseFloat(v2);
            break;
        case '/':
            product = parseFloat(v1) / parseFloat(v2);
            break;
        case '%':
            product = parseFloat(v1) % parseFloat(v2);
            break;
    }
    return product;
}


// let a=document.getElementsById("a");
// let b=document.getElementsById("b");
// let ButtonAdd=document.getElementById("ButtonAdd");
// let c=document.getElementsById("c");

// ButtonAdd.addEventListener("click", ()=>{
//     c.value=Number(a.value)+ Number(b.value);
// });

// function suma(){
//     c.value = Number(a.value)+ Number(b.value);
// }