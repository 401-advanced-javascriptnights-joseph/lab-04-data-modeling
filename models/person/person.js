'use strict';

const DataModel = require('../memory.js');

class Person extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { required: true },
      age: { type: 'number' },
      sex: { type: String },
    };
  }
}

module.exports = Person;