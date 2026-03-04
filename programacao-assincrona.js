// setTimeOut() função nativa que permite executar um bloco de código depois de um intervalo de tempo determinado

//setTimeout(callback(função), tempo);
console.log("ìnicio do programa");

setTimeout(function () {
  console.log("Bom dia, mundo assíncrono");
}, 2000);
setTimeout(function () {
  console.log("Primeiro setTimeout");
}, 1000);

console.log("fim do programa");
