const celsiusToFahrenheit = require('celsius-to-fahrenheit');
const { cpf } = require("easy-cpf");
const randn = require('randn');

console.log("Número Randómico: " + randn(5));

if(process.argv[2] !== undefined) {
    const cpf_verificacao = process.argv[2];
    console.log(cpf.validate(cpf_verificacao));
}
