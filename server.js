const http=require("http")

const server=http.createserver((req,res)=>{
    if(req.method==="GET" && req.url==="/api"){
    res.writehead(200,{
        "content-type":"application/json"
    });

    res.end(JSON.stringify({
        message: "Hello World",
        status: "success"
    }));
}

else{
    res.writehead(404,{
        "content-type":"application/json"
    });
    res.end(JSON.stringify({
        message: "Bad request or end point not found"
        
    }));

}
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000")

});