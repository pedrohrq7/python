// criação de classe
class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca; // definição dos atributos
        this.modelo = modelo;
        this.cor = cor;
    }

    // método 
    acelerar() {
        document.write("O carro " + this.modelo + " está acelerando..."+"<br>");
    }
    frear() {
        document.write("O carro "+ this.modelo + " freeou ararrrrr"+"<br>")
    }
}

// criando um objeto a partir de uma classe
let meuCarro = new Carro("Toyota", "Corolla", "Preto");
meuCarro.acelerar();
meuCarro.frear();
let meuOutrocarro = new Carro("Audi", "R8", "Preto")
meuOutrocarro.acelerar();
meuOutrocarro.frear();