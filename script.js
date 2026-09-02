const soma = 10 + 5;
const subtracao = 20 - 8;
const multiplicacao = 4 * 3;
const divisao = 50 / 2;

// console.log(soma);

const primeiroTexto = "10";
const segundoTexto = "5";

// const resultado = primeiroTexto + segundoTexto;
// console.log(resultado);

const textoPreco = "25.75";
const numeroPreco = parseFloat(textoPreco);
// console.log (typeof numeroPreco);

const textoIdade = "19";
const numeroIdade = parseInt(textoIdade);
// console.log(typeof numeroIdade);

const textoValor = "42.5";
const valorNumerico = Number(textoValor);
// console.log( typeof valorNumerico);

const valorDigitado = document.getElementById("campoPrimeiroNumero").value;
const numeroConvertido = parseFloat(valorDigitado);

document.getElementById("textoResultado").innerText = `Resultado ${numeroConvertido}`;


function somarNumeros() {
    document.getElementById("textoResultado").innerText = `Resultado ${numeroConvertido}`;
}

