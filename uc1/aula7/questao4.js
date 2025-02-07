function calcularHipotenusa(cateto1, cateto2) {
   
    // Usando o Teorema de Pitágoras: hipotenusa = sqrt(cateto1^2 + cateto2^2)
    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    return hipotenusa;
}

// Exemplo de uso:
const cateto1 = 3; // valor do primeiro cateto
const cateto2 = 4; // valor do segundo cateto

const hipotenusa = calcularHipotenusa(cateto1, cateto2);
console.log("A hipotenusa é: " + hipotenusa);