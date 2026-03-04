// modelo sincrono

console.log("inicio");

for (let i = 0; i < 5; i++) {
  console.log("Tarefa número: " + i);
}

console.log("fim");

function saudacao() {
  console.log("Bom dia");
}

function despedida() {
  console.log("Ate logo");
}

console.log("inicio");
saudacao();
despedida();
console.log("fim");
