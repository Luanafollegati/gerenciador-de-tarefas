//08
let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("Antes do splice:");
console.table(tarefas);

// Removendo a tarefa no índice 3 e substituindo por uma nova tarefa.
let tarefasRemovidas = tarefas.splice(3, 1);

console.log("Depois do splice:");
tarefas.splice(3,0, "Comer chocolate");
console.table(tarefas);

console.log("Tarefas removidas:", tarefasRemovidas);
