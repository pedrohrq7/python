let matriz = []
let linhas = 3
let colunas = 3
let soma = 0
let media = 0
for (let i = 0; i < 3 ; i++) {
    matriz [i] = []
    for(let j = 0; j < colunas; j++) {
        matriz [i][j] = parseFloat(prompt("Digite sua nota: "))
        soma += matriz[i][j]
    }
    media = (soma) / notas[i].lenght
    document.write("Aluno: "+(i+1)+" Média: "+media.toFixed(1)+"<br>")
}

let maiorNota = notas[0][0];
for (let i=0; i<notas.length; i++) {
    for (let j=0; j<notas[i].lenght; j++) {
        if (notas[1][j]>maiorNota) {
            maiorNota = nota[i][j];
        }
    }
}
document.write("Maior nota: "+maiorNota);

for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].lenght; j++) {
        if(notas[i][j] < 6) {
            notas [i][j]
        }
    }
}
document.write("<br>"+notas)