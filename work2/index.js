function getBills(sum) {
  const nominals = [5000, 1000, 500, 100];
  const result = {};
  let currentSum = sum;
  nominals.forEach((el) => {
    result[`${el} bills`] = Math.floor(currentSum / el);
    currentSum = currentSum % el;
  });
  result.coins = currentSum;
  return result;
}

// Такого в тз не было, но мало ли
// эта функция не принимает если не может выдать сумму
function fixedGetBills(sum) {
  const nominals = [5000, 1000, 500, 100];
  const result = {};
  let currentSum = sum;
  if (currentSum % nominals[nominals.length - 1]) {
    return `Enter sum in multiples ${nominals[nominals.length - 1]}`;
  }
  nominals.forEach((el) => {
    result[`${el} bills`] = Math.floor(currentSum / el);
    currentSum = currentSum % el;
  });
  return result;
}

console.log(getBills(5000));
console.log(getBills(19000));
console.log(getBills(5500));
console.log(getBills(5625));

// console.log(fixedGetBills(5000));
// console.log(fixedGetBills(19000));
// console.log(fixedGetBills(5500));
// console.log(fixedGetBills(5625));