let idade = 15

switch(true){
    // case (idade < 18):
    //     console.log("Não pode comprar bebidas")
    //     break
    case (idade >= 16 && idade <=17):
        console.log("Pode comprar acompanhado de um responsável legal")
        break
    case (idade >= 18):
        console.log("Pode comprar bebidas")
        break
    default:
        console.log("Não pode comprar bebidas")
}