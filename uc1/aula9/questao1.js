class Moto {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    surja() {
        document.write("A moto da "+this.marca+ ", cujo o modelo é "+this.modelo+" do ano "+this.ano+" é boa.")
    }
}

let mot1 = new Moto("Yamaha", "Fazer", "2025") 
mot1.surja()