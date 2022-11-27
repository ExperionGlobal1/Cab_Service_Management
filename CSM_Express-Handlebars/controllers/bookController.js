
const Cab = require('../models/cabBook');



module.exports.index = (req, res, next) => {
    Cab.findAll().then(cabBook => {
        res.render('booking-index', {
            data: cabBook,
            //identity: req.identity.user
        });
    })
}

module.exports.booking = (req, res, next) => {
    res.render('booking-create');
}

module.exports.bookingPost = (req, res, next) => {

    Cab.create({
        pickup: req.body.pickup,
        destination: req.body.destination,
        dot: req.body.dot,
        passenger: req.body.passenger,
        mobile: req.body.mobile
    })
        .then(CabBookFromDb => {
            res.redirect("/bookingdetail")
        })

}

module.exports.bookingUpdate = async (req, res, next) => {
    Cab.findByPk(req.params.id)
        .then(CabBookFromDb => {
            res.render('booking-update', {
                data: CabBookFromDb
            });
        });

}
module.exports.bookingUpdatePost = async (req, res, next) => {

    await Cab.update(
        {
            pickup: req.body.pickup,
            destination: req.body.destination,
            dot: req.body.dot,
            passenger: req.body.passenger,
            mobile: req.body.mobile
        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/bookingdetail");

}

module.exports.bookingDelete = async (req, res, next) => {
    let id = req.params.id;
    let CabBookFromDb = await Cab.findByPk(id);
    if (CabBookFromDb != null) {
        await Cab.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/bookingdetail");
    }
}
