// Criando um vetor para armazenar os alunos
let alunos = [
    { matricula: "1234", nome: "João", nota1: 8.0, nota2: 7.5 },
    { matricula: "5678", nome: "Maria", nota1: 6.0, nota2: 7.0 },
    { matricula: "91011", nome: "Ana", nota1: 5.5, nota2: 6.0 },
];

// Função para calcular a média de um aluno
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Função para determinar a mensagem com base na média
function obterMensagem(media) {
    if (media > 7.0) {
        return "Aluno Aprovado";
    } else if (media == 7.0) {
        return "Aluno em Recuperação";
    } else {
        return "Aluno Reprovado";
    }
}

// Variáveis para calcular a média geral
let somaMedias = 0;
let totalAlunos = alunos.length;

// Iterando sobre o vetor de alunos
alunos.forEach(aluno => {
    let media = calcularMedia(aluno.nota1, aluno.nota2);
    somaMedias += media; // Somando as médias para calcular a média geral depois
    let mensagem = obterMensagem(media);
    
    // Exibindo os resultados
    console.log(`Matrícula: ${aluno.matricula}, Nome: ${aluno.nome}, Média: ${media.toFixed(2)} - ${mensagem}`);
});

// Calculando e exibindo a média geral dos alunos
let mediaGeral = somaMedias / totalAlunos;
console.log(`Média geral dos alunos: ${mediaGeral.toFixed(2)}`);
