// Hello world program in Node.js

// console.log("Hello There ",v);







// connecting With Client Server

var http = require('http');   // To used "createServer Functionality"
    // 1st create variable (var) to store module , then says 'required'
    // Therefore we include the the module namely ase 'http'

http.createServer(function(req,res){ // create Server Command Belong To The hhtp
    res.writeHead(200, {'content-Type': 'text/html'})
    res.end("Hello There Alians!! ")
    // In server there is generally lot's of statement but we used single statement  "Hello There Alians!! "
    // therefore we must have to mention the   res.'end' to say this ending of the process don't have to waite more
    

}).listen(8000)















