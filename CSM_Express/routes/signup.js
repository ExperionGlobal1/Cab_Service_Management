const express =require('express');
const cc = require('../controllers/SignController');


const router = express.Router()

router.get('/signups', cc.getAll);
router.get('/signups/:id', cc.getOne);
// router.post('/cab', cc.validate('create'), cc.addOne);
// router.post('/cab',cc.addOne)

router.get('/signup',cc.signup)
router.post('/signup',cc.addOne)


module.exports = router;