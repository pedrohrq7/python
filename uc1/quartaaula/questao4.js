let valorInicial = prompt("Digite o valor inicial: ")
let percentualDesconto = prompt("Digite o percentual de desconto: ")

if(valorInicial.trim() == "" || percentualDesconto.trim() == "") {
    alert("Os valores devem ser preenchidos!")
} else {
    let valorFinal = parseFloat(valorInicial) * (1-(parseFloat(percentualDesconto) / 100))
    document.write("O valor final é: "+ valorFinal.toFixed(2))
}