// //função que simula operação assincrona
// function operacaoAssincrona(callback) {
//   setTimeout(() => {
//     console.log("Operação concluída!");

//     //chamando callback e passando dados para ele
//     callback("Dados da operação.");
//   }, 2000);
// }

// //função callback que será chamada quando a operação for concluída
// function meuCallback(dados) {
//   console.log(`Recebido no callback: ${dados}`);
// }

//chamando a função
// operacaoAssincrona(meuCallback);

function operacaoComErro(funcao) {
  setTimeout(() => {
    const sucesso = Math.random() > 0.5; //simula 50% de chance de erro
    console.log(sucesso);
    if (sucesso) {
      funcao(null, "Operação bem-sucedida.");
    } else funcao("Houve um erro na operação.", null);
  }, 2000);
}

//função callback que manipula erro e sucesso
function meuCallbackComErro(erro, resultado) {
  if (erro) {
    console.log(`Erro: ${erro}`);
  } else console.log(`Recebido no callback: ${resultado}`);
}

operacaoComErro(meuCallbackComErro);
