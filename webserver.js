var http = require('http');
var fs = require('fs')

let myServer = http.createServer(
    function(req, res) {

        let reqUrl = req.url;
        console.log("Received Request URL=",reqUrl);
        if(reqUrl == "/") {
            res.write("<body bgcolor='lightblue'><h1>Welcome to Node JS Web World!!!!!!!!!!</h1> <h1>This is our first Web Server</h1></body>");
        }
        else if(reqUrl == "/about") {
            res.write(" \
                <h1 style='color:red'>supporting your digital dreams</h1> \
                    <h3> \
                    CloudChain Technologies, operating from Karimnagar – the heart of Telangana State, is established with the motive of taking technology to every Business: medium/small scale. \
                    </h3>"
            )
        }
        /*
        else if(reqUrl == "/contact") {
            res.write(" \
                <h1 style='color:blue'>Contact Us!</h1> \
                    <h3> \
                    Leave Your Message </h3> \
                    <input type='text' placeholder='your name'><br /> \
                    <textarea placeholder='your message'></textarea>                 \
                    <button>Submit</button>"   )
        }
        */
        else if(reqUrl == "/contact") {
            let htmlPage = fs.readFileSync('./pages/contact.html');
            res.write(htmlPage);
        }
        else {
            res.write("<body bgcolor='lightpink'><h1>Page Not Found!!</h1></body>");
        }
        
        res.end();
    }
)

myServer.listen(4000);

console.log("Started our Web Server");