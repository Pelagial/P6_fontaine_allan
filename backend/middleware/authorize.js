/**
 * AUTHORIZE MIDDLEWARE SETTINGS ***********************************************************************************
 */

/** IMPORT ***********************************************/

/** General import */
const jwt = require('jsonwebtoken');
require('dotenv').config();

/** EXPORT ***********************************************/
/** Compare that the actual token is the same as the decoded token */
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.RANDOM_SECRET_TOKEN);
    const userId = decodedToken.userId;
    req.auth = { userId };  
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('403: unauthorized request.')
    });
  }
};