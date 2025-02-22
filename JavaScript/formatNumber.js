function formatNumber1(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatNumber2(num) {
  return new Intl.NumberFormat().format(num);
}

function formatNumber3(num) {
  return num.toLocaleString();
}

function formatNumber4(num) {
  const numToString = String(num);
  let result = "";
  let splitCount = 0;

  for (let i = numToString.length - 1; i >= 0; i--) {
    result = numToString[i] + result;
    splitCount++;
    if (splitCount % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return result;
}

console.log(formatNumber1(22374622334444));
console.log(formatNumber2(22287633444114));
console.log(formatNumber3(112233746744440));
console.log(formatNumber4(222233746744440));
