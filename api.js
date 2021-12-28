var express = require("express")
var app = express();
var url = require("url");
var port = process.argv[2];
    console.log("This will print on the webpage local host:3000")
    app.get("/api/eth", function(req, res){
    var parsedUrl = url.parse(req.url, true)
    usd = parsedUrl.query.usd;
    if(usd !== null){
        amount = usd/900;
    var Value = {
        'amount' : amount
    }
        res.status(200).json(Value)
    }
    else{
        res.send("Error 404 Page Not Found")
        res.status(404)
    }
})
    app.get("/api/btc", function(req, res){
        var parsedUrl = url.parse(req.url, true)
        usd = parsedUrl.query.usd;
        if(usd !== null){
            amount = usd/25000;
        var Value = {
            'amount' : amount
        }
            res.status(200).json(Value)
        }
        else{
            res.send("Error 404 Page Not Found")
            res.status(404)
        }
    })
    app.get("/*", function(req,res){
        res.send("Error 404 Page Not Found")
        res.status(404)
    })
    app.listen(port);