// 02
let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];
console.log("antes do pop");
console.table(tarefas);

// removendo a ultima tarefa
let tarefaRemovida = tarefas.pop();

console.log("depois do pop");
console.table(tarefas);  

console.log("tarefa removida: ", tarefaRemovida);
