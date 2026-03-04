//setInterval() - função nativa que permite executar um bloco de código repetidamente

//setInterval(callback(função), tempo);
console.log("ìnicio do programa");

setInterval(function () {
  console.log("Tarefas sendo feitas");
}, 2000);

setInterval(function () {
  for (let i = 0; i < 5; i++) {
    console.log("Tarefa número: " + i);
  }
}, 1000);

console.log("fim do programa");
