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
