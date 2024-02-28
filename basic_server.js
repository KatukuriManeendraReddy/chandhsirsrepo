var http = require('http');

let myServer = http.createServer(
    function(req, res) {
        res.write("<body bgcolor='lightblue'><h1>Welcome to Node JS Web World!!!!!!!!!!</h1> <h1>This is our first Web Server</h1></body>");
        res.end();
    }
)

myServer.listen(4000);

console.log("Started our Web Server");