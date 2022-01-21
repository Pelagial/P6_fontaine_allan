const express = require("express");
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/authorize');
const multer = require('../middleware/multer-config');

/**
 * Get Routes */
router.get("/", auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);

/**
 * Post Routes */
router.post('/', auth,  multer, sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.likeDislikeSauce);

/**
 * Put Routes */
router.put('/:id', auth, multer, sauceCtrl.updateSauce);

/**
 * Delete Routes */
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;