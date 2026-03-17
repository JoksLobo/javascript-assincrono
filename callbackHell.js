//callback hell

async function tarefa1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa 1 concluida");
      resolve();
    }, 1000);
  });
}
async function tarefa2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa 2 concluida");
      resolve();
    }, 1000);
  });
}
async function tarefa3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa 3 concluida");
      resolve();
    }, 1000);
  });
}

//resolução com await
async function realizarTarefas() {
  await tarefa1();
  await tarefa2();
  await tarefa3();
  console.log("Todas as tarefas concluídas");
}
realizarTarefas();

// resolução de promises
// tarefa1()
//   .then(() => tarefa2())
//   .then(() => tarefa3())
//   .then(() => console.log("Todas as tarefas concluídas"));
