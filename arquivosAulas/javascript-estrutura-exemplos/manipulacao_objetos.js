let pessoa = {
    nome: "Carlos",
    idade: 30,
    cidade: "Rio de Janeiro"
};

// Acessar propriedades
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);

// Adicionar uma nova propriedade
pessoa.profissao = "Engenheiro";
console.log(pessoa);

// Atualizar uma propriedade
pessoa.idade = 31;
console.log(pessoa);