/**
 * MULTER MIDDLEWARE SETTINGS ***********************************************************************************
 */

/** IMPORT ***********************************************/

/** General import */
const multer = require('multer');

/** Files type unification */
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

/** Import images files from user to DDB */
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

/** EXPORT ***********************************************/
module.exports = multer({storage: storage}).single('image');