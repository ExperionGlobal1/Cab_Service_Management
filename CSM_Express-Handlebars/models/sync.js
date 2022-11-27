const cabSignup= require('./cabSignup');
const CabBook= require('./cabBook');
const Driver_Details = require('./driver');

cabSignup.sync({alter:true});
CabBook.sync({alter:true});
Driver_Details.sync({alter:true});