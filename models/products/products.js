'use strict';

const DataModel = require('../memory.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: {require: true},
      category_id: { type: Number },
      price: { type: Number },
      weight: { type: Number },
      quantity_in_stock: { type: true },
    };
  }
}

module.exports = Products;
