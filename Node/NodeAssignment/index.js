const { log } = require('console');
const fs = require('fs');


const fileName = 'nodejs_architecture.txt'
const data  = 'node is a runtime enviroment for java script cat cat cat cat cat'

//writing data in file 
fs.writeFileSync(fileName, data);
try{
    fs.writeFileSync(fileName, data);
    console.log('sucessfull in writing data  ');
}catch(err){
    console.log('error in writing data ', err);
}



// first opening the file (fd --> file descriptor)
const filepath = '/Node/NodeAssignment/nodejs_architecture.txt'
fs.open(filepath , 'r' , (err, fd)=>{
    if(err){
        console.log("error in file opening" ,err);
        return;
    }
    const buffer = Buffer.alloc('2000');
    //reading the file and consoling 
    fs.read(fd ,buffer ,0 , buffer.length ,(err , bytesRead , buffer )=>{
        if(err){
            console.log('error in file reading');
            return 
        }else{
            const finaldata = buffer.toString('utf8' , 0 , bytesRead);
            console.log(' the content  >  ' + finaldata);
        }
        //fs closing (file )
        fs.close(fs , (err)=>{
            console.log('error in closing');
        });
    });
});

//appending new data 
fs.appendFile('nodejs_architecture.txt' ,"  node provides many advantages " , 'utf8',(err)=>{
    if(err) console.log('error in appeding file '+err) ;
    else console.log('sucessfullin appending');
});

//deleting file 
fs.unlink('nodejs_architecture.txt' , (err)=>{if(err) console.log("error in deleting file "); else console.log('sucessfully deleted');})










