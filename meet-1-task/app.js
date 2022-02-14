var http = require('http')
, {readFileSync} = require('fs')
, fs = require('fs')
, path = require('path')
, port = 8000
, server;

// function getFile(url, req, res) {
//     fs.readFile(url, (data) => {
//       res.setHeader(
//         "Content-Type",
//         !path.extname(req.url) ? "text/html" : "text/css"
//       );
//       res.end(data);
//     });
//   }

server = http.createServer(function(req, res) {

    const url = req.url;

    if(req.method === 'GET'){
        console.log(req.url, req.method);
        if(url === "/"){
            // getFile("./index.html'", req, res);
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/index.html'));
            res.end();
        }else if(url === "/index.html"){
            //getFile("./contact.html'", req, res);
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/index.html'));
            res.end();
        }else if(url === "/contact"){
            //getFile("./contact.html'", req, res);
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/contact.html'));
            res.end();
        }else if(url === "/css/font-awesome.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/font-awesome.css'));
            res.end();
        }else if(url === "/css/style.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/style.css'));
            res.end();
        }else if(url === "/css/responsive.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/responsive.css'));
            res.end();
        }else if(url === "/css/skins/color-1.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/skins/color-1.css'));
            res.end();
        }else if(url === "/css/skins/color-2.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/skins/color-2.css'));
            res.end();
        }else if(url === "/css/skins/color-3.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/skins/color-3.css'));
            res.end();
        }else if(url === "/css/skins/color-4.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/skins/color-4.css'));
            res.end();
        }else if(url === "/css/skins/color-5.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/skins/color-5.css'));
            res.end();
        }else if(url === "/css/style-switcher.css"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"
              );
            res.write(readFileSync(__dirname + '/css/skins/color-5.css'));
            res.end();
        }else if(url === "/js/main.js"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css" 
              );
            res.write(readFileSync(__dirname + '/js/main.js'));
            res.end();
        }else if(url === "/js/style-switcher.js"){
            console.log("success")
            res.setHeader(
                "Content-Type",
                !path.extname(req.url) ? "text/html" : "text/css"  
              );
            res.write(readFileSync(__dirname + '/js/style-switcher.js'));
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