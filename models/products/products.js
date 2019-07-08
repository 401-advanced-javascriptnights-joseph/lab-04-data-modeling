'use strict';

const uuid = require('uuid/v4');

const mongoose = require('mongoose');

/*Add the following fields - use your own judgement on field type and validation rules
category_id
price
weight
quantity_in_stock*/

const schema = {
  category_id: { required: true },
  price: { required: true },
  weight: { required: true },
  quantity_in_stock: { required: true },
};

console.log(schema);

class Products {
  constructor(){
    this.database = [];
  }

  get(id) {
    
  }

  create(entry) {
 
  }

  update(id) {

  }

  delete(id) {

  }
}

let product = new Products();
module.exports = Products;