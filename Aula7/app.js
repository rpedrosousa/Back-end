const express = require('express');
const app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//MYSQL Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'person'
});
console.log("MySQL connection created at %s with database : %s", connection.config.host, connection.config.database);

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});

//EXAMPLE OF CONNECTION QUERY
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });

//get request to list all the users from the database
app.get('/listusers', function (request, response) {
    connection.query('select * from person.pessoa;', function (err, rows, fields) {
        if (err) throw err;
        response.send(rows);
    });
});

app.post('/addusers', function (request, response) {
    var query = 'insert into person.pessoa(firstname,lastname,profession,age) values ?';
    var value = request.body;
    var p = [[value.firstname, value.lastname, value.profession, value.age]];
    connection.query(query, [p], function (err, result, fields) {
        if (err) throw err;
        response.send("Number of records inserted: " + result.affectedRows);
    });
});

app.post('/getuser', function (request, response) {
    var query = 'select * from person.pessoa where id = ?';
    var value = request.body.id;
    connection.query(query, value, function (err, rows, fields) {
        if (err) throw err;
        response.send(rows[0]);
    });
});

app.get('/user/:id',function(request,response){
    
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));