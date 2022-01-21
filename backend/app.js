/**
 * APP CREATION AND SETTINGS ***********************************************************************************
 */


/** IMPORT ***********************************************/

/** General import */
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
const app = express();

/** import requires js files to use routes */
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

/**
 * Link to MongoDB ***********************************************************************************
 */
 mongoose.connect('mongodb+srv://admin:adminPelagial52@cluster0.xqxdf.mongodb.net/Cluster0?retryWrites=true&w=majority',
 { useNewUrlParser: true,
   useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

/**
 * Prevent Cors issues ***********************************************************************************
 */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

/**
 * Some security configuration ***********************************************************************************
 */
app.use(helmet());
app.disable('x-powered-by');

/** Reconize Req Object as JSON Object */
app.use(express.json());

/** Images Routes for multer */
app.use('/images', express.static(path.join(__dirname, 'images')))

/** Users Routes use */
app.use('/api/auth', userRoutes);

/** Sauces Routes use */
app.use('/api/sauces', sauceRoutes);

/** EXPORT ***********************************************/
module.exports = app;