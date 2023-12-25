const express = require('express');
const path = require('path');
const port = 8080

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/profile', function(req,res){
    console.log(req.url);
    // let a = res.writeHead(200,{'content-type': 'text/html'});
    res.render('home', {title : "my contact list"});
    return res;
});

app.get('/practice', function(req,res){
    console.log(req.url);
    // let a = res.writeHead(200,{'content-type': 'text/html'});
    res.render('practice', {title : "practice rendering"});
    return res;
});

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is up and running on port "+ port);
})