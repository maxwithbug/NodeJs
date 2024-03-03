const count = 0 ;
let left = 5

function counting(){
    count++
    left -= count
    if(count != left){
            console.log('event is working perfectly , and have '+ left +' chances left ');
    }else{
        console.log('you reached the event limit');
    }
}
emitter.on('limit',counting);


const http = require('http');
const port = 5007 ;
const server = http.createServer((req , res)=>{
    if(req.url === '/bio'){
        res.end('api working')
        emitter.emit('limit')
    }
});
server.listen(port , (err)=>{
    if(err){
        console.log('problem in starting server '+ err);
    }else{
        console.log('server listning on ' , port);
    }
});
// if(count !== left){
//     emitter.on('limit',()=>{
//         console.log('event is working perfectly , and have '+ left +' chances left ');
//     })
// }else{
//     console.log('you reached the event limit');
// }
// emitter.emit('limit')






// let  count = 0; // Corrected spelling of "count"
// let limit = 5; // Renamed "left" to "limit" for better clarity

// function counting() {
//   count++; // Incremented count within the function
//   emitter.on('limit', () => {
//     console.log('Event is working perfectly, and you have ' + (limit - count) + ' chances left.');
//   });
//   if(count < limit) { // Check if count is still within the limit
//     emitter.emit('limit'); // Emit the event immediately after registering the listener
//     }else {
//     console.log('You reached the event limit.');
//   }
// }

// counting(); // Call the function to start the process