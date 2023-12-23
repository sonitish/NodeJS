const http = require('http');
const port = 8080

function requestHandler(req,res){
    console.log(req.url);
    res.end("Response")
}

const server = http.createServer(requestHandler);

server.listen(port,function(err,res){
    if(err){
        console.log(err);
    }
    console.log("Server running on port: " + port);
});
