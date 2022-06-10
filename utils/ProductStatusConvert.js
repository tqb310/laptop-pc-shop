const status = ['Hết hàng', 'Còn hàng'];

exports.ProductStatusConvert = (statusCode) => {
  return status[statusCode];
};
