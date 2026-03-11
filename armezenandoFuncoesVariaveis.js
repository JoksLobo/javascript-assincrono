//função anônima
let armezenaFuncao = function () {
  console.log("Bom dia, sou uma função anônima dentro de uma variável!");
};

armezenaFuncao();

//função nomeada
let soma = function (a, b) {
  console.log(a + b);
};

soma(1, 2);

//função arrowfunction
let multiplicar = (a, b) => {
  console.log(a * b);
};

multiplicar(2, 3);

//setTimeout()
setTimeout(multiplicar, 2000, 5, 10);
