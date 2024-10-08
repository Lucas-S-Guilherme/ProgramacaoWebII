let salarioInicial = 3000;

let salarioComAumento = salarioInicial * 1.20;

let descontoINSS = salarioComAumento * 0.08;
let salarioFinal = salarioComAumento - descontoINSS;

console.log("Salário inicial: R$ " + salarioInicial.toFixed(2));
console.log("Salário com aumento: R$ " + salarioComAumento.toFixed(2));
console.log("Desconto do INSS: R$ " + descontoINSS.toFixed(2));
console.log("Salário final: R$ " + salarioFinal.toFixed(2));