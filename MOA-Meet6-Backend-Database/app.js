const http = require('http');
const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : "127.0.0.1",
  user : "root",
  password : "",
  port : 3306,
  database : "db_library"
});

connection.connect((err) => {
  if(err){
    console.error(err);
    return;
  }
  console.log("Database Connected!");
});

const server = http.createServer((req, res) => {
  if(req.method === 'GET' && req.url === '/'){
    fs.readFile('./index.html', (err, data) => {
      if(err){
        res.end('Error!');
      }
      res.end(data);
    });
  } else if(req.method === 'GET' && req.url === '/books'){
    let books = [];

    connection.query("SELECT * FROM tb_books", (err, results) => {
      if(err){
        console.error(err);
        return;
      }
      books = results;
      res.end(JSON.stringify(books));
    });
  } else if(req.method === 'POST' && req.url === '/books'){
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    console.log(body);
    req.on("end", () => {
      const { name, description, author, price, publisher} = JSON.parse(body);
      const date = new Date();
      res.writeHead(200, {"Content-Type": "application/json"})
      connection.query(
        "INSERT INTO tb_books (name, author, description, price, published_at, publisher) VALUES (?,?,?,?,?,?)",
        //"INSERT INTO tb_books (DEFAULT, name, author, description, price, NULL, publisher) VALUES (?,?,?,?,?,?,?)",
        [name, author, description, price, date, publisher],
        (err, results) => {
          if(err){
            console.error(err);
            return;
          }
          res.end(JSON.stringify(results));
      });
    });
  } else if(req.method === 'POST' && req.url === '/books/delete'){
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    console.log(body);
    req.on("end", () => {
      const { id } = JSON.parse(body);
      res.writeHead(200, {"Content-Type": "application/json"})
      connection.query(
        "DELETE FROM tb_books WHERE id = (?)", [id],
        (err, results) => {
          if(err){
            console.error(err);
            return;
          }
          res.end(JSON.stringify(results));
      });
    });
  }

});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});