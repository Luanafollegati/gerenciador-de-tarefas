// 05
let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

if (tarefas.includes("Ir à academia")) {
    console.log('na lista de tarefas já possui essa tarefa');
    
} else {
    tarefas.push ('Ir à academia');
    console.log("Lista incluindo a tarefa Ir à academia:", tarefas);
    
}