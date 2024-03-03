const http = require('http')
const port = 5002 


let server = http.createServer((req , res)=>{
    //it's a default page 
    req.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("I Am Happy To Learn Full Stack Web Development From PW Skills!")
})

server.listen(port,(err)=>{
    if(err){
        console.log('error in starting server ');
    }else{
        console.log('server running on LocalHost : ' , port);
    }
})

















