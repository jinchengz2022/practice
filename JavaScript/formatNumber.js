function formatNumber1(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatNumber2(num) {
  return new Intl.NumberFormat().format(num);
}

function formatNumber3(num) {
  return num.toLocaleString();
}
