const valor1 = prompt("Diga quanto tirou na prova: ")
const valor2 = prompt("No simulado: ")
const valor3 = prompt("No trabalho: ")

if (valor1.trim() == "" || valor2.trim() == "" || valor3.trim() == "") {
    alert("Informe valores válidos.")
} else {
    let media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)) / 3 
        document.write("A média é: "+ media.toFixed(2))
}