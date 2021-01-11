const connection = require('./connection');


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
// turning an object into something sequel can understand
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function (table, cb) {
        const queryStr = `SELECT * FROM ??`;
        connection.query(queryStr, table, (err, result) => {
            if (err) throw (err);
            cb(result);
        });
    },

    insertOne: function (table, column, value, cb) {
        var queryStr = "INSERT INTO " + table;
        queryStr += " (";
        queryStr += column.toString();
        queryStr += ") ";
        queryStr += "VALUES (";
        queryStr += printQuestionMarks(value.length);
        queryStr += ") ";


        console.log(queryStr);
        console.log(value);

        connection.query(queryStr, value, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function (table, value, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(value);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};



module.exports = orm;