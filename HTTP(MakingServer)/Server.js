//making and starting my first server --

const { log } = require('console')
const http = require('http')


const server = http.createServer((req ,res )=>{
    if(req.url === '/'){  //checking the path for responsse 
        res.write('<h1>Hello World ! </h1>')
    }else if(req.url === '/about'){
        res.write('you are noob');
    }
    res.end()
})

server.listen(5001, () => {
    console.log('Server listening on port 5001');
});











