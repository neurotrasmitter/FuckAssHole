function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomValueTest(min, max, count) {
  const table = {};
  let result = 0;
  for (let i = 0; i < count; i++) {
    result = randomValue(min, max);
    if (result in table) {
      table[result] += 1;
    } else {
      table[result] = 1;
    }
  }
  for (let el in table) {
    table[el] = `${(table[el] / count) * 100}%`;
  }
  return table;
}

export { randomValue, randomValueTest };
