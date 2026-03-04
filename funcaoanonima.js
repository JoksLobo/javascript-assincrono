//função anonima - ela não possui nome function(parametros){instruções}

let saudacao = function () {
  console.log("Bom dia, sou uma função anônima!");
};
saudacao();

(function () {
  console.log("Olá, sou uma função que não está dentro de lugar nenhum.");
})();

//setTimeout()
//setInterval()

setTimeout(function () {
  console.log("Bom dia, sou uma função anônima dentro de um timeout!");
}, 2000);

setInterval(saudacao, 1000);
