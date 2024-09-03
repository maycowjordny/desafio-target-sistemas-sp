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
