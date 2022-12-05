const UserDetail= require('./userdetail');
const BookingDetail= require('./bookingdetail');
const DriverDetails = require('./driverdetail');
const CabDetail = require('./cabdetail');
const AdminDetail = require('./admindetail');


UserDetail.sync({alter:true});
BookingDetail.sync({alter:true});
DriverDetails.sync({alter:true});
CabDetail.sync({alter:true});
AdminDetail.sync({alter:true});
