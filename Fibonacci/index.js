function isFibonacci(num) {
  if (num < 0)
    return "O número informado não pertence à sequência de Fibonacci.";

  let a = 0;
  let b = 1;

  while (b < num) {
    const next = a + b;
    a = b;
    b = next;
  }

  if (b === num || num === 0) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
}

const numeroInformado = 24;
const resultado = isFibonacci(numeroInformado);
console.log(resultado);
