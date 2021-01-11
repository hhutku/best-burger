const orm = require('../config/orm')

const burger = {
 
  selectAll: cb => {
    orm.selectAll('burgers', result => {
      cb(result)
    })
  }

};

module.exports = burger;