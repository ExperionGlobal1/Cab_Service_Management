const express =require('express');
const cc = require('../controllers/homeController');

const router = express.Router()


router.get('/', cc.home);


module.exports = router;

