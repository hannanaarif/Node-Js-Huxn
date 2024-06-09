import http from 'http'

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1>Home</h2>")
    }
    else if(req.url==="/about"){
        res.end("<h2>About Section</h2>");
    }
    else if(req.url==="/contact"){
        res.end("<h1>Contact section</>");
    }
    else{
        res.end("<h1>page not found</h1>")
    }
});

server.listen(8000,()=>console.log("server is up and Running"));