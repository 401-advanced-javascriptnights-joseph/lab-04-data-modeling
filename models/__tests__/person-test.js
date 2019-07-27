'use strict';

const Person = require('../person/person.js');

describe('Person Model', () => {

  let person;

  beforeEach(() => {
    person = new Person();
  });

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = person.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(person.sanitize(testRecord)).toBeUndefined();
  });

  it('can post() a new person', () => {
    let obj = { name: 'Test Person' };
    return person.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a person', () => {
    let obj = { name: 'Test Person' };
    return person.create(obj)
      .then(record => {
        return person.get(record._id)
          .then(person => {
            Object.keys(obj).forEach(key => {
              expect(person[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a person', () => {
    let obj = { name: 'Test Person', zoo: true };
    person.create(obj)
      .then(record => {
        person.update(record.id, { name: 'New Test Person', id: 55 })
          .then(person => {
            person.get(55)
              .then(zz => {
                expect(zz.name).toEqual('New Test Person');
              })
              .catch(err => console.error);
          });
      })
      .catch(err => console.error);
  });

  it('can delete() a person', () => {
    let obj = { name: 'Test Person' };
    person.create(obj)
      .then(record => {
        return person.delete(record._id)
          .then(person => {
            expect(person.get(record._id).name).toBeFalsy();
          });
      })
      .catch(err => console.error);
  });

});