// Preços das camisetas
const precoPequena = 10;
const precoMedia = 12;
const precoGrande = 15;


let quantidadePequenas = 5;  
let quantidadeMedias = 3;    
let quantidadeGrandes = 2;   

// Cálculo do valor arrecadado para cada tipo de camiseta
let valorPequenas = quantidadePequenas * precoPequena;
let valorMedias = quantidadeMedias * precoMedia;
let valorGrandes = quantidadeGrandes * precoGrande;

// Cálculo do valor total arrecadado
let valorTotal = valorPequenas + valorMedias + valorGrandes;

// Exibindo o resultado
console.log(`Total arrecadado: R$ ${valorTotal.toFixed(2)}`);
