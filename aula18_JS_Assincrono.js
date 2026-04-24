const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Primeira Promise resolvida!"), 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Segunda Promise resolvida!"), 1000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Terceira Promise resolvida!"), 3000);
});

// Promise.all - Executa todas as promises e retornam uma unica promise que resolve quando todas as
// promises no array resolvem.
Promise.all([promise1, promise2, promise3])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((erro) => {
    console.log("Error:", erro);
  });

// Promise.race - Exectuar todas as promises e retorna uma unica Promise que resolve ou rejeita
//  assim que a primeira Promise no array resolver ou rejeitar
Promise.race([promise1, promise2, promise3]).then((resultados) => {
  console.log(resultados);
});

async function exemplo() {
  try {
    await Promise.all([promise1, promise2, promise3]);
    console.log(resultados);
  } catch (erro) {
    console.log("Error:", erro);
  }
}
