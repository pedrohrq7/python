class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    brota(){
        document.write("Nome: "+this.nome+"<br>"+"Preço: "+"R$"+this.preco+"<br>"+"Quantidade: "+this.quantidade)
    }
}

let prod1 = new Produto ("Cerveja Heineken", 21.80, 3)
prod1.brota()