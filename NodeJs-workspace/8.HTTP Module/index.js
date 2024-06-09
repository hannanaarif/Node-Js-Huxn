import http from 'http';

const server=http.createServer((req,res)=>{
    console.log(req);
    // res.write("<h1>Hello fron=m NodeJs Server</h1>");
})

server.listen(8000,()=>console.log("Server Up!"));