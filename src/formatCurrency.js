const formatCurrency = (number) => number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export default formatCurrency;
