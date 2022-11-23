const db = require('./db');


//---------------display all data- customer--------------------
function getAll(callback){
    const sql ="SELECT user_id,Firstname,Lastname,DOB,Mobile,Email_id,Password FROM register";
    db.executeQuery(sql,[],callback);
}
//------------------- reg-insertion---------
function addOne(Firstname,Lastname,DOB,Mobile,Email_id,Password,callback){
    const sql = "INSERT INTO register(Firstname,Lastname,DOB,Mobile,Email_id,Password)VALUES (?,?,?,?,?,?)";
    db.executeQuery(sql,[Firstname,Lastname,DOB,Mobile,Email_id,Password],callback);
}
//------------------- booking-insertion---------
function bookingOne(pickup,destination,date_of_Travel,No_of_Passenger,mobile,callback){
    const sql = "INSERT INTO booking(pickup,destination,date_of_Travel,No_of_Passenger,mobile)VALUES (?,?,?,?,?)";
    db.executeQuery(sql,[pickup,destination,date_of_Travel,No_of_Passenger,mobile],callback);
}
module.exports.getAll=getAll;
module.exports.addOne=addOne;
module.exports.bookingOne=bookingOne;
