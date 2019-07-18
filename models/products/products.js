'use strict';

const DataModel = require('../memory.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      price: { required: true },
      weight: { required: true },
      quantity_in_stock: { required: true },
    };
  }
}

module.exports = Products;
