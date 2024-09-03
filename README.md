
# Desafio Target Sistemas - SP

### 1. Lógica de Cálculo

**Descrição:** Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

**Resolução da questão:**

```javascript
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);
```
O valor da variável soma é 91

### 2. Sequência de Fibonacci

**Descrição:** 
Dada a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor é sempre a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem de sua escolha para verificar se um número informado pertence ou não à sequência.

**Resolução da questão:**

```javascript
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
```

### 3. Cálcular faturamento distribuidora

**Descrição:** 
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

• O menor valor de faturamento ocorrido em um dia do mês;

• O maior valor de faturamento ocorrido em um dia do mês;

• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**Resolução da questão:**

```javascript
const monthlyRevenue = [
  { day: 1, revenue: 200 },
  { day: 2, revenue: 250 },
  { day: 3, revenue: 180 },
  { day: 4, revenue: 0 },
  { day: 5, revenue: 0 },
  { day: 6, revenue: 300 },
  { day: 7, revenue: 400 },
  { day: 8, revenue: 500 },
  { day: 9, revenue: 450 },
  { day: 10, revenue: 0 },
  { day: 11, revenue: 220 },
  { day: 12, revenue: 330 },
  { day: 13, revenue: 310 },
  { day: 14, revenue: 200 },
  { day: 15, revenue: 100 },
  { day: 16, revenue: 190 },
  { day: 17, revenue: 210 },
  { day: 18, revenue: 250 },
  { day: 19, revenue: 270 },
  { day: 20, revenue: 290 },
  { day: 21, revenue: 0 },
  { day: 22, revenue: 310 },
  { day: 23, revenue: 350 },
  { day: 24, revenue: 370 },
  { day: 25, revenue: 400 },
  { day: 26, revenue: 420 },
  { day: 27, revenue: 0 },
  { day: 28, revenue: 430 },
  { day: 29, revenue: 440 },
  { day: 30, revenue: 460 },
];

function findMinimumRevenue(monthlyRevenue) {
  const nonZeroRevenue = monthlyRevenue.filter((item) => item.revenue !== 0);

  const minimumRevenue = Math.min(
    ...nonZeroRevenue.map((item) => item.revenue)
  );

  return minimumRevenue;
}

function findMaximunRevenue(monthlyRevenue) {
  const nonZeroRevenue = monthlyRevenue.filter((item) => item.revenue !== 0);

  const maximunRevenue = Math.max(
    ...nonZeroRevenue.map((item) => item.revenue)
  );

  return maximunRevenue;
}

function daysAboveMonthlyAverage(monthlyRevenue) {
  const media = monthlyRevenue.reduce((a, c) => {
    return a + c.revenue / monthlyRevenue.length;
  }, 0);

  const result = monthlyRevenue.filter((monthly) => monthly.revenue > media);

  return result.length;
}

console.log(
  `O menor valor de faturamento ocorrido em um dia do mês é ${findMinimumRevenue(
    monthlyRevenue
  )}`
);
console.log(
  `O maior valor de faturamento ocorrido em um dia do mês é ${findMaximunRevenue(
    monthlyRevenue
  )}`
);
console.log(
  `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal é ${daysAboveMonthlyAverage(
    monthlyRevenue
  )}`
);

```

### 4.Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43

• RJ – R$36.678,66

• MG – R$29.229,88

• ES – R$27.165,48

• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Resolução da questão:**
```javascript
const state = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function invoiceState(obj) {
  const total = Object.values(obj).reduce((a, c) => a + c, 0);

  const percentages = Object.keys(obj).reduce((acc, state) => {
    acc[state] = ((obj[state] / total) * 100).toFixed(2) + "%";
    return acc;
  }, {});

  console.log("Total:", total.toFixed(2));
  console.log("Percentuais de representação por estado:");
  Object.entries(percentages).forEach(([state, percentage]) => {
    console.log(`${state}: ${percentage}`);
  });
}

invoiceState(state);
```

### 5.Inverter string

**Descrição:**Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; 

**Resolução da questão:** 

```javascript
function invertedString(str) {
  let inverted = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverted += str[i];
  }
  return inverted;
}

console.log(invertedString("carro"));


```
