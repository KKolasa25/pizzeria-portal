/* global require, process */
const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('build/db/app.json');
const middlewares = jsonServer.defaults({
  static: './',
  noCors: true
});
const port = process.env.PORT || 3131;

server.get(/\/home.*/, (req,res) =>{
  if(req.url === '/home'){
    req.url += '/';
  }
  const filePath = __dirname+req.url.replace('/home', '/build');
  if(fs.existsSync(filePath)){
    res.sendFile(filePath);
  } else {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  }
});

server.use(function(req, res, next) {
  const api = /^\/api(.*)$/.exec(req.url);

  if (api && api.length > 1) {
    req.url = api[1] || '/';
  } else {
    req.url = '/build/front' + req.url;
  }
  next();
});

server.use(middlewares);
server.use(router);

server.listen(port);