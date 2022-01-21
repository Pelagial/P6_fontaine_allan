/**
 * USER MODEL AND SETTINGS ***********************************************************************************
 */

/** IMPORT ***********************************************/

/** General import */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

/** Schema creation */
const userSchema = mongoose.Schema({
  email: { 
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
});

/** Use to be sure that the email is unique */
userSchema.plugin(uniqueValidator);

/** EXPORT ***********************************************/
module.exports = mongoose.model('User', userSchema);


