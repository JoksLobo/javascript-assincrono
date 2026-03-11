function tarefaAssincrona(callback) {
  setTimeout(() => {
    console.log("Tarefa concluída");
    callback("Resultado da tarefa");
  }, 2000);
}

console.log("Inicio da execução");

//chama função assincrona e passa um callback para ser executado após 2seg
tarefaAssincrona((resultado) => {
  console.log(resultado);
});

console.log("Fim da execução");
