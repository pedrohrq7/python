// programa pra ler o nome e escrever o nome

// let nome = prompt("Digite o nome:")
// console.log(nome)
// alert("O nome é: "+nome)

// ler dois valores

let num1 = prompt("Digite o primeiro número")
let num2 = prompt("Digite o segundo número")
// testar se valores são nulos
if (num1.trim === "" || num2.trim === "") {
    alert("Informe valores válidos")
} else {


    // conversão dos valores
    let valor1 = parseFloat(num1)
    let valor2 = parseFloat(num2)
    //  realizar a soma
    let soma = num1 + num2
    // exibir a soma
    //document.write("Soma: "+soma)
    // faça uma condição para testar se a soma é maior ou menor do que 20

    if (soma > 20) {
        document.write("A soma é maior que 20")
    } else if (soma < 20) {
        document.write("A soma não é maior que 20")
    } else {
        document.write("Soma igual a 20")
    }
}




