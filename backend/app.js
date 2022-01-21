/**
 * APP CREATION AND SETTINGS ***********************************************************************************
 */

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

/** import requires files to use routes */
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

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')))

/** Users Routes use */
app.use('/api/auth', userRoutes);

/** Sauces Routes use */
app.use('/api/sauces', sauceRoutes);

module.exports = app;