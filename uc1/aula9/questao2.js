class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    pia() {
        document.write("Nome: "+this.nome+"<br>"+"Idade: "+this.idade+"<br>"+"Profissão: "+this.profissao)
    }
}
let nome = prompt("Informe o nome: ")
let idade = parseInt(prompt("Informe a idade: "))
let profissao = prompt("Informe a profissão ")
let novapessoa = new Pessoa(nome,idade,profissao)
novapessoa.pia()