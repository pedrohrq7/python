// função math.floor
// arredonda um número para baixo. exemplo
console.log("*** Números aleátorios ***")
console.log(Math.floor(4.9)); //4
console.log(Math.floor(2.3)); //2

// função Math.random()
// gera um número aleátorio 
console.log ("*** Números aleátorios ***")
// entra 0 e 1, onde 0 incluso e 1 excluso
console.log(Math.random())
console.log(Math.floor(Math.random() * 11))
// entre 1 e 6 
console.log(Math.floor(Math.random() * 6) + 1)

// função Math.ceil () arrendonda para cima
console.log("*** Números com ceil ***")
console.log(Math.round(4.4))
console.log(Math.round(4.7))
let media = 7.6
console.log(Math.random(media))

// função Math.max() e Math.min()
console.log("*** Números max e min ***")
console.log(Math.max(10, 20, 5, 30))
console.log(Math.min(10, 20, 5, 30))

// função Math.pow() = potência
console.log(Math.pow(2,3)) // 2³
let lado = 4
let area = Math.pow(lado,2)
console.log("Área do quadrado: "+area)

// função Math.sqrt() = raiz quadrada
console.log("*** Números sqrt ***")
console.log(Math.sqrt(25))
console.log(Math.sqrt(9))