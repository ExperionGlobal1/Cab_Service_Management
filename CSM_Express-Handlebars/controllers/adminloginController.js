const Cab = require('../models/admindetail');

module.exports.login = (req, res, next) => {
    res.render('admin-login');
}
module.exports.loginPost = async (req, res, next) => {
    const { email, password } = req.body;
    const userFromDb = await Cab.findOne({
        where: { email: email, password: password }
    
    });
    
    if (userFromDb == null) {
        return res.render('admin-create', { message: 'No user with this email or password was found.' })
    }

    // req.session.userid = userFromDb.id;
    res.redirect('welcome');
}

module.exports.register = (req, res, next) => {
    res.render('admin-create');
}

module.exports.registerPost = async (req, res, next) => {
    const { firstname, lastname,dob,mobile, email, Password } = req.body;

    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return res.render('admin-login', { message: 'Already registered.' });
    }
    await User.create({
        firstName: firstname,
        lastName: lastname,
        Date_of_Birth: dob,
        Mobile: mobile,
        email: email,
        password: Password
       
       
    });

    res.redirect('/admin-login');
}
