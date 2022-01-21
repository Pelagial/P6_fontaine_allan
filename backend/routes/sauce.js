/**
 * SAUCE ROUTES AND SETTINGS ***********************************************************************************
 */

/** IMPORT ***********************************************/

/** General import */
const express = require("express");
const router = express.Router();

/** import requires js files to use routes */
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/authorize');
const multer = require('../middleware/multer-config');

/** import requires routes js files */
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

/** EXPORT ***********************************************/
module.exports = router;