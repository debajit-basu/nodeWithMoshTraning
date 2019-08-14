var url = 'http://www.google.com';

function log(message){
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url;

//Module Wrapper function
// (function (exports , require , module , __filename,__dirname) {
//     var url = 'http://www.google.com';

//     function log(message){
//         // Send an HTTP request
//         console.log(message);
//     }

// module.exports.log = log;
// })