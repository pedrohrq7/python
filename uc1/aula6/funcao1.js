// function cumprimentar(nome) {
//     alert("Olá, " + nome + "! Seja bem-vindo.");
// }

// let nomes = ["Fellipe","Pedro","Davi","Adriel","Alex"]
// for (let i=0; i<nomes.length; i++){
//     cumprimentar(nomes[i])
// }

// function somar(a, b) {
//     let soma = a+b;
//     return soma
// }

// // Armazenando o resultado em variáveis
// let resultado1 = somar(7,3);
// alert(resultado1)

function media(nota1,nota2) {
    let med = (nota1+nota2)/2;
    return med
}

// armazendo o resultado em variáveis
let resultado = media(3, 8);
if (resultado >= 6) {
    alert("Aprovado")
} else {
    alert("Reprovado")
}