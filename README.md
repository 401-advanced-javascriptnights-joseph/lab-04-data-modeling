# LAB - 04

## Data Modeling

### Author: Joseph Hangarter

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)

### Modules
#### `memory.js` class model with CRUD
#### `fs.js` exported read and write files
#### `categories.js` class categories that extends from class model in `memory.js`
#### `categories.test.js` test for `categories.js`
#### `products.js`class products with CRUD
#### `products.test.js` test for `products.js`

##### Exported Values and Methods
`get()` get something from the database if it exists
`create()` create something
`update()` update something
`delete()` delete something
`sanitize()` makes sure there are no illegal character

#### Running the app
* `npm start`
* `npm run lint`
  
#### Tests (categories and products)
* `npm test`
* Add Record - Adds one and sees the return value
* Get Record - Adds one, fetches it, and then compares the IDs to be the same
* Delete Record - Adds one, and then deletes it
* Update Record - Adds one, and then updates value
