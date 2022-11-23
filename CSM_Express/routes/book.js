const express =require('express');
const cc = require('../controllers/bookController');

const router = express.Router()

router.get('/books', cc.getAll);
router.get('/books/:id', cc.getOne);
// router.post('/cab', cc.validate('create'), cc.addOne);
// router.post('/cab',cc.addOne)

router.get('/book',cc.book);
router.post('/book',cc.addOne);


module.exports = router;