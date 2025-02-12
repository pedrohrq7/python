 class Filme {
    constructor(titulo, diretor, ano){
        this.titulo = titulo
        this.diretor = diretor
        this.ano = ano
    }
    bloco7() {
        document.write("Título: "+this.titulo+"<br>"+"Diretor: "+this.diretor+"<br>"+"Ano de lançamento: "+this.ano)
    }
 }

 let film1 = new Filme ("Maze Runner: Correr ou Morrer", "Wes Ball", 2014)
 film1.bloco7()