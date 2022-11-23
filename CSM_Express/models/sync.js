const cabSignup= require('./cabSignup');
const CabBook= require('./cabBook');

cabSignup.sync({alter:true});
CabBook.sync({alter:true});