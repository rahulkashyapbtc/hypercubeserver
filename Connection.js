const mysql = require('mysql');  


const Connection = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "password",
database:"hypercube",
// socketPath: '/var/run/mysqld/mysqld.sock'
});  


Connection.connect(function (err) {
   if(err){
       console.log("error occurred while connecting");
   }
   else{
       console.log("connection created with Mysql successfully");
   }
});

  
module.exports = Connection;