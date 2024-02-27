const path = require('path');
const { log } = require('util');

console.log(path.sep); /*output - / for (mac & linux) , \ for (windows ) */  //[sep -> seperator  ]
console.log(process.env.PATH); //for checking processes 
console.log(path.delimiter);


//how to know your current file path 
const CurrentFilePath = __filename ; // for file path
console.log(CurrentFilePath);
const CurrentDirectoryPath = __dirname ; // for directory path
console.log(CurrentDirectoryPath);


//for base name
const baseName = path.basename(CurrentFilePath)
console.log('simple base name > ',baseName);
//base name with out extention
const justBaseName = path.basename(CurrentFilePath,'.js')  //(.js)-> indicates that i know the extention name
console.log('base name without extention >',justBaseName);


//for directory name  of the file 
const dirname = path.dirname(CurrentFilePath)
console.log('directoryt >',dirname);

//for knowing extention name 
console.log('ext1 > ', path.extname(CurrentFilePath));
console.log('ext2 > ', path.extname('noob.hunu.txt')); // multiple file with (.) seperator will no effect on extention

//for combining base & directory 
const pathTOfile =  path.format({
    dir : 'dog/cat/elephant.js',
    base : 'cool.js'
});
console.log('pathTOfile > ',pathTOfile);

//for knowing absolute path like root (:c ,:d ,/) or reletive path (normal path )
console.log('isabsolute >',path.isAbsolute(CurrentFilePath));
console.log('isabsolute >',path.isAbsolute('/node.js'));
console.log('isabsolute >',path.isAbsolute('./node.js')); // starting with (.) so it's indicates it's in current path not in root so it's not a absolute path 

let pathtodir = path.join('/home','caaat','dogggg','lll.gooo')
console.log('pathtodir > ', pathtodir);


//for  braking the structure of any path 
console.log('parse >',path.parse(CurrentFilePath));

//retrive the relatiive path from two path 
console.log('relative path >', path.relative('/home/user/config','/home/user/js/'));

console.log('resolve >', path.resolve());
console.log('resolve >', path.normalize('//good///home/cool.js')); 


