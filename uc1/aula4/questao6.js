let num1 = prompt("Digite o primeiro número:")
let num2 = prompt("Digite o segundo número")

if(num1.trim() == "" || num2.trim() == "") {
    alert("Informe um número!")
} else {
    if(parseFloat(num1) > parseFloat(num2)) {
        document.write("O primeiro número é maior!")
    } else if (parseFloat(num1) < parseFloat(num2)) {
        document.write("O segundo número é maior!")
    }
    else {
        document.write("Os dois números são iguais!")
    }
}
