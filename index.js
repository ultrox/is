const isEmpty = require("lodash.isempty");

const is = {
  false: x => x === false,
  empty: x => isEmpty(x),
  notEmpty: x => !is.empty(x)
};

module.exports = is;
