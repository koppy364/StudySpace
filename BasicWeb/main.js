var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : 'nodejs',
  database : 'tutorials'
});
db.connect();

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var qs = require('querystring');

  if (pathname === '/') {
    if (queryData.id === undefined) {
      db.query('SELECT * FROM topic', function (error, topics){ 
        var title = 'welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics);
        var html = template.html(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`);
        response.writeHead(200);
        response.end(html);
      });
    } else {
        db.query('SELECT * FROM topic', function (error, topics){
          if(error){
            throw error;
          }
          db.query(`SELECT * FROM topic WHERE id=?`, [queryData.id], function(error2, topic){
            if(error2){
              throw error2;
            }
            var title = topic[0].title;
            var description = topic[0].description;
            var list = template.list(topics);
            var html = template.html(title, list, `<h2>${title}</h2>${description}`, `
            <a href="/create">create</a>
            <a href="/update?id=${queryData.id}">update</a>
            <form action="delete_process" method="post">
            <input type="hidden" name="id" value="${queryData.id}">
            <input type="submit" value="delete">
            </form>`
            );
            response.writeHead(200);
            response.end(html);
          }) 
        });
      }
      /*
      fs.readdir('./data', function(error, filelist){
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf-8', function (err, description) {
          var title = queryData.id;
          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescription = sanitizeHtml(description, {
            allowedTags: ['h1']
          });
          var list = template.list(filelist);
          var html = template.html(sanitizedTitle, list, `<h2>${title}</h2>${sanitizedDescription}`,
           `<a href="/create">create</a>
            <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
            </form>`);
          response.writeHead(200);
          response.end(html);
        });
    });
    */
   } else if(pathname === '/create'){
    db.query('SELECT * FROM topic', function (error, topics){ 
      var title = 'Create';
      var list = template.list(topics);
      var html = template.html(title, list, 
        `
        <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
        <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
        <input type="submit">
        </p>
        </form>
        `, `<a href="/create">create</a>`);
      response.writeHead(200);
      response.end(html);
    });

  } else if(pathname === "/create_process"){
    var body = '';
    request.on('data', function(data){
      body = body + data;
    });
    request.on('end',function(){
      var title = new URLSearchParams(body).get('title');
      var description = new URLSearchParams(body).get('description');
      db.query(`
      INSERT INTO topic (title, description, created, author_id) VALUES(?, ?, NOW(), ?)`
      , [title, description, 1], function(error, result){
        if(error){
          throw error;
        }
        response.writeHead(302, {Location: `/?id=${result.insertId}`});
        response.end('sucess');
      })

    });
  } else if(pathname === '/update'){
    db.query(`SELECT * FROM topic`, function(error, topics){
      if(error){
        throw error;
      }
      db.query(`SELECT * FROM topic WHERE id=?`, [queryData.id], function(error2, topic){
        if(error2){
          throw error2;
        }
        var list = template.list(topics);
        var html = template.html(topic[0].title, list,
          `
          <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${topic[0].id}"></input>
          <p><input type="text" name="title" placeholder="title" value="${topic[0].title}"></p>
          <p>
          <textarea name="description" placeholder="description">${topic[0].description}</textarea>
          </p>
          <p>
          <input type="submit">
          </p>
          </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${topic[0].id}">update</a>`);
        response.writeHead(200);
        response.end(html);
      });
  });
  } else if(pathname ==='/update_process') {
    var body = '';
    request.on('data', function(data){
      body = body + data;
    });
    request.on('end',function(){
      var id = new URLSearchParams(body).get('id');
      var title = new URLSearchParams(body).get('title');
      var description = new URLSearchParams(body).get('description');
      db.query(`UPDATE topic SET title=?, description=?, author_id=1 WHERE id=?`, [title, description, id], function(error, result){
        response.writeHead(302, {Location: `/?id=${id}`});
        response.end('sucess');
      });
    });
  } else if(pathname ==='/delete_process') {
    var body = '';
    request.on('data', function(data){
      body = body + data;
    });
    request.on('end',function(){
      var id = new URLSearchParams(body).get('id');
      db.query(`DELETE FROM topic WHERE id=?`, [id], function(error, result){
        if(error){
          throw error;
        }
        response.writeHead(302, {Location: `/`});
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);
