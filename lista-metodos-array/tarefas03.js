// 03

let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("antes do unshift");
console.table(tarefas);

//Adicionando uma nova tarefa no inicio da lista de array
tarefas.unshift("Comer chocolate")

console.log("depois do unshift");
console.table(tarefas);