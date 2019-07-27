'use strict';

const DataModel = require('../memory.js');

class Person extends DataModel {
  constructor() {
    super();
    this.schema = {
      name: { required: true },
      age: { type: 'number' },
      sex: { required: true },
    };
  }
}

module.exports = Person;