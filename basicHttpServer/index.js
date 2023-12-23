const http = require('http');
const fs = require('fs');
const port = 8080

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type': 'text/html'});

    let filePath;
    switch(req.url){
        case '/' : 
            filePath = './index.html'; break;
        case '/profile' :
            filePath = './index.html'; break;
        default :
            filePath = './404.html'; break;
    }

    fs.readFile(filePath, function(err,data){
        if(err){
            console.log("We are facing issue while reading this file");
            res.end("Error ");
        }
        res.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port,function(err,res){
    if(err){
        console.log(err);
    }
    console.log("Server running on port: " + port);
});
