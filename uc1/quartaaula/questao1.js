let lado1 = prompt("Digite o primeiro lado")
let lado2 = prompt("Digite o segundo lado")
let lado3 = prompt("Digite o terceiro lado")

if(lado1.trim() ==="" || lado1<=0 && lado2.trim() ==="" || lado2<=0 && lado3.trim() ==="" || lado3<=0   ) {
    alert("Dígito inválido")
} else if (
    (parseInt(lado1)+parseInt(lado2) < parseInt(lado3)) ||
    (parseInt(lado1)+parseInt(lado3) < parseInt(lado2)) ||
    (parseInt(lado2)+parseInt(lado3) < parseInt(lado1))
) {
    alert("Os valores não podem formar um triângulo")
} else {
    //testar qual é o tipo de triângulo
    if (parseInt(lado1) == parseInt(lado2) && parseInt(lado2) == parseInt(lado3)){
        document.write("Triângulo Equilátero")
    } else if (parseInt(lado1) == parseInt(lado2) || parseInt(lado2) == parseInt(lado3) || parseInt(lado1) == parseInt(lado3)){
        document.write("Triângulo Isósceles")
    } else {
        document.write("Triângulo Escaleno")
    }
}