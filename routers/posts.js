//importo postController.js
const postfunz = require('../controllers/postController');

//setto il router
const express = require("express");
const router = express.Router();

//----------root------------

// index
router.get('/', postfunz.index);

// show
router.get('/:id', postfunz.show);

// store
router.post('/', postfunz.store);

// update
router.put('/:id', postfunz.update);

// modify
router.patch('/:id', postfunz.modify);

// destroy
router.delete('/:id', postfunz.destroy);

module.exports = router;