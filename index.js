var express=require('express');
var app=express();

app.get('/',function(request,response){
    response.send("hi hemanth kumar");
});
var port=process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("catch the action at http://localhost:"+port);
});