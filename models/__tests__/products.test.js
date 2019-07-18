'use strict';

const Products = require('../products/products.js');

describe('Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  });

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = products.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(products.sanitize(testRecord)).toBeUndefined();
  });

  // it('can post() a new product', () => {
  //   let obj = { name: 'Test Product' };
  //   return products.create(obj)
  //     .then(record => {
  //       Object.keys(obj).forEach(key => {
  //         expect(record[key]).toEqual(obj[key]);
  //       });
  //     })
  //     .catch(e => console.error('ERR', e));
  // });

  // it('can get() a product', () => {
  //   let obj = { name: 'Test Product' };
  //   return products.create(obj)
  //     .then(record => {
  //       return products.get(record._id)
  //         .then(product => {
  //           Object.keys(obj).forEach(key => {
  //             expect(product[0][key]).toEqual(obj[key]);
  //           });
  //         });
  //     });
  // });

  // it('can update() a product', () => {
  //   let obj = { name: 'Test Product', zoo: true };
  //   products.create(obj)
  //     .then(record => {
  //       products.update(record.id, { name: 'New Test Product', id: 55 })
  //         .then(product => {
  //           products.get(55)
  //             .then(zz => {
  //               expect(zz.name).toEqual('New Test Product');
  //             })
  //             .catch(err => console.error);
  //         });
  //     })
  //     .catch(err => console.error);
  // });

  // it('can delete() a product', () => {
  //   let obj = { name: 'Test Product' };
  //   products.create(obj)
  //     .then(record => {
  //       return products.delete(record._id)
  //         .then(product => {
  //           expect(products.get(record._id).name).toBeFalsy();
  //         });
  //     })
  //     .catch(err => console.error);
  // });

});