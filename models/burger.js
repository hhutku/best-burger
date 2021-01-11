const orm = require('../config/orm')

const burger = {
 
  selectAll: cb => {
    orm.selectAll('burgers', result => {
      cb(result)
    })
  },
  addOneBurger: (column, value, cb) => {
    orm.insertOne('burgers', column, value, function (result) {
      cb(result);
    });
  }

};

module.exports = burger;