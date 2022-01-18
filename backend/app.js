/**
 * APP CREATION AND SETTINGS ***********************************************************************************
 */

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const usersRoutes = require('./routes/users');
/**
 * Link to MongoDB ***********************************************************************************
 */
 mongoose.connect('mongodb+srv://admin:adminPelagial52@cluster0.xqxdf.mongodb.net/Cluster0?retryWrites=true&w=majority',
 { useNewUrlParser: true,
   useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

/**
 * Prevent Cors issues ***********************************************************************************
 */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

/** Users middlewear */
app.use('/api/auth', usersRoutes);

module.exports = app;