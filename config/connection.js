const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: 'lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 's74k7oon37wje6yr',
    password: 'vwplzjoi27d94z68',
    database: 'cd0qul0oifaql7gv'
  });
}

connection.connect();
module.exports = connection;





// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Ahmet1256.",
//   database: "burger_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for  ORM to use.
// module.exports = connection;

