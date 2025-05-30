// 11
let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

let tarefasFiltradas = tarefas.filter(tarefa => tarefa.length > 15);

console.log(`Tarefas filtradas (tarefas que têm mais de 15 caracteres): ${tarefasFiltradas}`);