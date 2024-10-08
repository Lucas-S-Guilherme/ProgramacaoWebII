// Valor total da conta (exemplo)
let valorConta = 101.53;

// Calculando o valor que cada um deveria pagar de maneira igual
let valorIgual = valorConta / 3;

// Carlos e André pagam a parte inteira do valor, sem centavos
let valorCarlos = Math.floor(valorIgual);
let valorAndre = Math.floor(valorIgual);

// Felipe paga o restante da conta, que inclui os centavos
let valorFelipe = valorConta - (valorCarlos + valorAndre);

// Exibindo quanto cada um deve pagar
console.log(`Carlos deve pagar: R$ ${valorCarlos.toFixed(2)}`);
console.log(`André deve pagar: R$ ${valorAndre.toFixed(2)}`);
console.log(`Felipe deve pagar: R$ ${valorFelipe.toFixed(2)}`);
