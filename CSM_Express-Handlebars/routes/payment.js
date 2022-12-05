const express =require('express');
const cc = require('../controllers/paymentController');

const router = express.Router()


router.get('/payment', cc.payment);


module.exports = router;

