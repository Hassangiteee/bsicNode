const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('home page')
    }
   
    if(req.url === '/about'){
        for(let i=0;i<100000; i++){
            for(let j=0; j<1000000;j++){
            }
        }
        res.end('about')
    }
    if(req.url === '/contact'){
        res.end('contact page')
    }
});
server.listen(5000,()=>
{
   console.log("sever listnening on port");
});