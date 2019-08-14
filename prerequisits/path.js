const path = require('path');
const os = require('os');
const file = require('fs');

var pathObj = path.parse(__filename);

// console.log(pathObj);



// os module

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory} & FreeMemory: ${freeMemory}`);



// FileSystem module

//const files = file.readdirSync('./');

//console.log(file);

const files = file.readdir('./' , function(err , files){
    if(err) console.log('Error', err)
    else console.log(files)
});

