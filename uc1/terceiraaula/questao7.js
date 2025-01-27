let num = 55
/*
switch (true) {
    case (num >= 1 && num <= 10):
        console.log("Número válido")
        break
    case (num >= 50 && num <= 100):
        console.log("Número válido")
        break
    default:
        console.log("Número inválido")
}
*/

if((num >= 1 && num <= 10) || (num >= 50 && num <= 100)) {
    console.log("Número válido")
} else {
    console.log("Número inválido")
}