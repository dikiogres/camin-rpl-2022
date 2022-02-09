var http = require('http')
, {readFileSync} = require('fs')
, fs = require('fs')
, port = 8000
, server;

server = http.createServer(function(req, res) {

    const url = req.url;

    if(req.method === 'GET'){
        if(url === "/"){
            res.setHeader("content-type", "text/html");
            res.write(readFileSync(__dirname + '/index.html'));
            res.end();
        }else if(url === "/contact"){
            res.setHeader("content-type", "text/html");
            res.write(readFileSync(__dirname + '/contact.html'));
            res.end();
        }else{
            res.writeHead(404, {"content-type": "text/html"});
            res.write("<h1>Page not Found!</h1>");
            res.end();
        }
    }else{
        var body = '';
         req.on('data', function(data){
            body += data;
         });
         req.on('end', function(){
            //let data = body.replaceAll("&", "\n");
            body += "\n\n";
            fs.writeFile("contact.txt", body, {flag : "a"} ,(err) => {
                if(err){
                    console.log(err);
                } 
            });
            res.writeHead(200,{"content-type": "text/html"});
            res.write("<p>Form submitted</p>");
            res.end();
         });
    }
})

server.listen(port, function(){
    console.log('listening on http://localhost:8000/');
})