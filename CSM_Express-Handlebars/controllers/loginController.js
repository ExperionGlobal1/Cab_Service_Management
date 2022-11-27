const Cab = require('../models/cabSignup');

module.exports.login = (req, res, next) => {
    res.render('cabsignin');
}
module.exports.loginPost = async (req, res, next) => {
    const { email, Password } = req.body;
    const userFromDb = await Cab.findOne({
        where: { email: email, password: Password }
    });
   
    if (userFromDb == null) {
        return res.render('signup-create', { message: 'No user with this email or password was found.' })
    }

    // req.session.userid = userFromDb.id;
    res.redirect('/booking');
}

module.exports.register = (req, res, next) => {
    res.render('signup-create');
}

module.exports.registerPost = async (req, res, next) => {
    const { firstname, lastname,dob,mobile, email, Password ,cPassword} = req.body;

    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return res.render('cabsignin', { message: 'Already registered.' });
    }
    await User.create({
        firstName: firstname,
        lastName: lastname,
        Date_of_Birth: dob,
        Mobile: mobile,
        email: email,
        password: Password,
        password: cPassword
       
    });

    res.redirect('/cabsignin');
}
