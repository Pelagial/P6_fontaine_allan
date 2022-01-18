const bcrypt = require('bcrypt');
const User = require('../models/User');
const jsonwebtoken = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User ({
                email: req.body.email,
                password: hash
            });
            user.save()
            .then(() => res.status(201).json({ message: 'SignUp Success' }))
            .catch(error => res.status(400).json({error : error}));
        })
        .catch(error => res.status(500).json({error : error}));
    next();
};

exports.login = (req, res, next) => {
    user.findOne({ email: req.body.email})
        .then(user => {
            if (!user){
                return res.status(401).json({error : error});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid){
                        return res.status(401).json({error : error});
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jsonwebtoken.sign(
                            {userId: user._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({error : error}));
        })
        .catch(error => res.status(500).json({error : error}));
    next();
};