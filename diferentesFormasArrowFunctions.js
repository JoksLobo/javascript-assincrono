const soma = (a, b) => {
  return a + b;
};

console.log(soma(8, 6));

const quadrado = (x) => x * x;
console.log(quadrado(5));

const dobro = (x) => x * 2;
console.log(dobro(10));

const calcularArea = (largura, altura) => {
  const area = largura * altura;
  return area;
};

console.log(calcularArea(53, 15));

//this não funciona com arrow function
const objeto = {
  nome: "Joks",
  metodo: function () {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

objeto.metodo();

const pessoa = {
  nome: "Jocson",
  saudacao: function () {
    setTimeout(() => {
      console.log(`Bom dia, meu nome é ${this.nome}`);
    }, 2000);
  },
};

pessoa.saudacao();
