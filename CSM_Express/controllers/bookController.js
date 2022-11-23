const db = require('../models/cabBook');
const { body, validationResult } = require('express-validator');
var path=require('path');

module.exports.getAll = (req, res, next) => {
    db.findAll()
        .then(result => {
            res.json(result);
        })
}

module.exports.getOne = (req, res, next) => {
    let id = req.params.id;
    db.findByPk(id).then(user => {
        res.status(user == null ? 404 : 200)
        res.json(user)
    });
}

module.exports.addOne = (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(404)
    //         .json({
    //             errors: errors.array()
    //         });
    // }
    db.create({
        pickup: req.body.pickup,
        destination: req.body.destination,
        dot: req.body.dot,
        passenger: req.body.passenger,
        mobile: req.body.mobile
        

    })
        .then((user) => {
            res.json(user);
        })
}

// module.exports.validate = function (action) {
//     switch (action) {
//         case 'create':
//             return [
//                 body('firstname', "Invalied First Name").exists().isLength({ min: 2, max: 15 }),
//                 body('lirstname', "Invalied Last Name").exists().isLength({ min: 2, max: 15 }),
//                 body('email', "Invalied Email").exists().isEmail()
//             ]
//     }
// }


module.exports.book=function(req,res,next){
    var loc=path.join(__dirname,'../',"views","cabbook.html");
    return res.sendFile(loc)
}
