"use strict";
const express  = require('express');


//var flash = require('connect-flash');

const app = express();
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded( {extended : false } ));



// //router error 
// app.use((req, res, next) =>{
//   const error =new Error("Not found - CustomCIS");
//   error.status =404;
//   next(error);
// });

// app.use((error, req, res, next)=>{
//   res.status(error.status || 404);  
//   res.render('dashboard/dashboard.ejs');
//   res.json({
//       error: {
//           message : error.message
//       }
//   })
// });

module.exports = app;

