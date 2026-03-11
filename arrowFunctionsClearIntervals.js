//arrow functions
// () => {instruções}

let minhaFuncao = () => {
  console.log("Olá, sou uma arrow function!");
};
minhaFuncao();

setTimeout(() => {
  console.log("Bom dia, sou uma arrow function dentro de um timeout!");
}, 2000);

let contador = 5;

let intervalo = setInterval(() => {
  console.log("Contador está no número: " + contador);
  contador--;

  //quando contador chegar a 0 - precisa parar o intervalo
  if (contador < 0) {
    clearInterval(intervalo);
    console.log("Contagem finalizada.");
  }
}, 2000);
