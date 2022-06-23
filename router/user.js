import { Router } from 'express';
import { getUser } from '../model/Users.js';
import { getProfile } from '../model/Profiles.js';

const router = Router();

router.get('/get_all', async function (req, res) {

    getUser.findAll({ exclude: [] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        })
});

router.post('/insert', async function (req, res) {
    getUser.create({
        name: req.query.name,
        lastName: req.query.lastName,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number
    }, { fields: ['name', 'lastName', 'email', 'password', 'phone_number'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        });
});


export default router;