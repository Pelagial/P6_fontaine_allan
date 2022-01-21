/**
 * USER ROUTES AND SETTINGS ***********************************************************************************
 */

/** IMPORT ***********************************************/

/** General import */
const express = require('express');
const router = express.Router();

/** import requires js files to use routes */
const userCtrl = require('../controllers/user');

/** import requires routes js files */
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

/** EXPORT ***********************************************/
module.exports = router;