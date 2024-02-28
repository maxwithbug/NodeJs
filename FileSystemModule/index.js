/*file system best for on the work and temporary things (likek : crearting a file ,read , write .etc...) */


/*reading the fs.js file in ASynchronous way (high lvl api) */
const fs = require('fs');//fs is a module for file oparations

console.log("READ START");
fs.readFile('noob.txt' ,function(err , data)/*it's a callback function */{  //you can put path in noob.txt , we are not putting path because we are in current path , if any file in other path the you have to put path 
    if(err){
        console.log('err > ', err);
        return err
    }
    console.log('data > ', data.toString());
    console.log('READ END ');
    return data
});
console.log('OTHER STUFF');


/*reading the fs.js file in Synchronous way (high lvl api)  */
const data = fs.readFileSync('noob.txt');
console.log('OTHER STUFF');
console.log('data > ', data.toString());
console.log('READ END ');




//reading using low lvl api(it's caled two level split technique)
//read > open + read
const buf = new Buffer(1200) ; //1200 is the size of  buffer , you can change it according to your need 
/*Buffer ->  buffer is a temporary storage area in memory used to perform input/output operations, especially when dealing with binary data or when working with streams. */
fs.open('noob.txt','r+',function(err,fd){  // (r+) is the mode we can do [read , write ] , fd -> is not data it's an (refarance of the file )  it's also a object of file system we can do many oparation with this
    if(err){
        console.log("error while opening file ");
    }
    console.log('file open sucessfully ');

    //now reading 
    fs.read (fd , buf , 0 ,buf.length ,0 , function(er , data){ //(buffer) is the storage where we store the data or file after opening ,(0)->  is  the offset [starting position]
        /*buf.length indicates i want to read full data , (2nd 0 )-> potion i wan t to reaad  */    
        if(er){
            console.log('err in reading file');
        }
        console.log('data > ', data.toString());
        //or we can do --
        /*console.log('data>',data) ; [because data come in bytes so the output will bw in bytes ]
        console.log('data i can reead ',buf.slice(0,buf).toString()) ;  [ making a copy of total buf form position 0 and making it as striing]
         */
    })  
})




//how  to write in a file 
fs.writeFile('noob.txt','we are going to darjiling ' , function(errr){   //previous data will be removed (overwrite basically)
    if(errr){
        console.log('error during writing file');
    }else{
        console.log('Sucessfull in  writing file');
    }
})

//how  to write in a file (with out overwrite )
fs.appendFile('noob.txt', 'yee baby come on','utf8', (err) => { //(utf8)-> used in chareactor encoding mainly 
    if (err) {
    console.error('Error appending to file:', err);
    return;
    }
    console.log('Text successfully appended to file.');
}); 


//closing file ---
const buff = new Buffer(1200) ; 
fs.open('noob.txt','r+',function(err,fd){  
    if(err){
        console.log("error while opening file ");
    }
    console.log('file open sucessfully ');


    fs.read (fd , buff , 0 ,buf.length ,0 , function(er , data){ 
        if(er){
            console.log('err in reading file');
        }
        console.log('data > ', data.toString());
        fs.close(fd , (err)=>{
            if(err){
                console.log('error in closing file ');
            }else{
                console.log('sucsess in closing file ');
            }
        })  //done clossing--
    })  
})

//cerating a file --
// File content to be written
const content = 'Hello, world!';

// Path and filename for the new file
const filePath = 'newfile.txt';

// Write content to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File created successfully!');
});

//**delete a file --(only for file , we have other methods for folder)
fs.unlink('noob.txt',(err)=>{
    if(err){
        console.log('error in deleting file ');
    }else{
        console.log('sucsess in deleting file ');
    }
})






