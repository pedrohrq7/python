let num1 = 7
let num2 = 4
let adicao = "Divisão"

switch(adicao){
    case "Adição":
        console.log(num1+num2)
        break

    case "Subtração":
        console.log(num1-num2)
        break
    case "Multiplicação":
         console.log(num1*num2)
         break
    case "Divisão":
        console.log(num1/num2)
        break
    default:
        console.log("Erro.")
}
