const { log } = require('console');
const { subscribe } = require('diagnostics_channel');
const Event = require('events') //it's a class like Human 
const emitter = new Event(); // it's a Object like john , merry , etc... (Creating a instance of the events )



//resgester  a listener 
emitter.on('subscribe',(options )=>{
    if(subscribe){
        console.log('thanks for subscribing '+options);
    }
})

//emit -> making a noise or produce somting - signalling 
//raising an event 
emitter.emit('subscribe' , 'collage wallah')


/*Task 9 */
//random log function
function random(){
    console.log('random is working ');
}
//calling event 
emitter.addListener('Remove',random)
//removing event 
emitter.removeListener('Remove',random)
//calling after removal
console.log('calling after removal');
emitter.emit('Remove')




// limiting event listener 
console.log(`The default maximum number of event listners are: ${emitter.getMaxListeners()}`);
emitter.setMaxListeners(5);
console.log(`The default maximum number of event listners are: ${emitter.getMaxListeners()}`);