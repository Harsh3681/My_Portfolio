
// Here below we cerate an our local server and run our project on it
//  server create by using "express" module
//  then we run our project on it by using "nodemon" module

// ################## IMP ############################

//  use "npm run server" in terminal to run server through "nodemon" module

const express = require('express');
const app = express();

app.use(express.static('club'));

app.listen(3000, () => {
  console.log('Server started on port 3000');   // its an call back fuction
});


 









