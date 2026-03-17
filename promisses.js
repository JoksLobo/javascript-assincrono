// const minhaPromise = new Promise((resolve, reject) => {
//   let sucesso = true;

//   if (sucesso) {
//     resolve("Operação bem-sucedida.");
//   } else {
//     reject("Houve um erro na operação.");
//   }
// });

// minhaPromise
//   .then((resultado) => {
//     console.log(`${resultado} - Operação bem-sucedida.`);
//   })
//   .catch((erro) => {
//     console.log(`${erro} - Houve um erro na operação.`);
//   })
//   .finally(() => {
//     console.log("Operação concluida.");
//   });

// console.log(minhaPromise);

function minhaOperacaoAssincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucesso = Math.random() > 0.5;

      if (sucesso) {
        resolve("Operação bem-sucedida.");
      } else {
        reject("Houve um erro na operação.");
      }
    }, 2000);
  });
}

minhaOperacaoAssincrona()
  .then((resultado) => {
    console.log(`${resultado} - Operação bem-sucedida da função assincrona.`);
  })
  .catch((erro) => {
    console.log(`${erro} - A Operação falhou.`);
  })
  .finally(() => {
    console.log("Fim da operação.");
  });

// console.log(minhaOperacaoAssincrona());
