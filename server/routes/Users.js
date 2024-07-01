const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');

const { sign } = require('jsonwebtoken');

router.post('/sign-up', async (req, res) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 10).then((hashedPassword) => {
        Users.create({ username, password: hashedPassword });
        res.json('User created successfully');
    });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username } });

    if (!user) return res.json({ error: 'Incorrect username or password.' });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            res.json({ error: 'Incorrect username or password.' });
        } else {
            const accessToken = sign(
                { username: user.username, id: user.id },
                'ygrbEHDSJn473829@%^&*(@&^%#'
            );
            res.json(accessToken);
        }
    });
});

module.exports = router;
