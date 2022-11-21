const db = require('./db');


//---------------display all data- customer--------------------
function getAll(callback){
    const sql ="SELECT user_id,Firstname,Lastname,DOB,Mobile,Email_id,Password FROM passenger";
    db.executeQuery(sql,[],callback);
}
//------------------- insertion---------
function addOne(Firstname,Lastname,DOB,Mobile,Email_id,Password,callback){
    const sql = "INSERT INTO passenger(Firstname,Lastname,DOB,Mobile,Email_id,Password)VALUES (?,?,?,?,?,?)";
    db.executeQuery(sql,[Firstname,Lastname,DOB,Mobile,Email_id,Password],callback);
}
module.exports.getAll=getAll;
module.exports.addOne=addOne;
