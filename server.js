const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const listenserver = (req,res)=>{
    res.setHeader('Content-Type','text/plain');
    //res.end('Hello from server');
    res.write('Hello from server');
    res.end();
  };

const server = http.createServer(listenserver);

server.listen(port,hostname,()=>{
  console.log('Server running at http://'+hostname+":"+port);
});