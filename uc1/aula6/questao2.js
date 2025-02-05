// function operacaosoma(a, b){
//     let soma = a + b
//     return soma
// }
// let soma = prompt("Digite os valores:")

// function operacaosubtracao(a, b) {
//     let subtracao = a + b
//     return subtracao
// }

// let subtracao = prompt("Digite os valores:")

// function operacaomultiplicacao(a, b) {
//     let multiplicacao = a * b
//     return multiplicacao
// }

// let multiplicacao = prompt("Digite os valores:")

// function operacaodivisao(a, b) {
//     let divisao = a / b
//     return divisao
// }

// let divisao = prompt("Digite os valores:")

function soma(a, b) { return a + b; }
function subtracao(a, b) { return a - b; }
function multiplicacao(a, b) { return a * b; }
function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

// principal para ler os números e a operação
let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));

let operacao = prompt("Escolha a operação (soma, subtracao, multiplicacao, divisao):").toLowerCase();

// Chamando a função correspondente à operação escolhida
switch (operacao) {
    case 'soma':
        alert("Resultado: "+ soma(a, b));
        break;
    case 'subtracao':
        alert("Resultado: "+ subtracao(a, b));
        break;
    case 'multiplicacao':
        alert("Resultado: "+ multiplicacao(a, b));
        break;
    case 'divisao':
        alert("Resultado: "+ divisao(a, b));
        break;
    default:
        resultado = "Operação inválida!";
}


