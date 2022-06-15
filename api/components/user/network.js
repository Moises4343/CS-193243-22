import { Router } from 'express';
import { success} from '../../../network/response.js';
import {getData} from '../../../models/db.js';
import { getUser } from "../../../models/Users.js";

const router = Router();


router.post('/register', async function (req, res) {
 
    console.log('register');
    const client = await getConnection();

    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    console.log(username, email, password, phone_number)

    const query_request = {
        text: 'INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES ($1, $2, $3, $4)',
        values: [username, email, password, phone_number]
    };

    client.query(query_request)
        .then(r => { console.log('1'); success(req, res, r, 200); })
        .catch(e => { console.log('2'); success(req, res, e.stack, 200); })

});

router.delete('/delete', async function (req, res) {

    const client = await getConnection();

    let idUser = req.query.id;

    const query_request = {
        text: `delete from tbl_usersdb where id = ${idUser}`
    };

    client.query(query_request)
        .then(r => { console.log('1'); _success(req, res, r, 200); })
        .catch(e => { console.log('2'); _success(req, res, e.stack, 200); })
});

router.put('/update', async function (req, res) {
   
    const client = await getConnection();

    let id = req.query.id;
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    const query_request = {
        text: `UPDATE  tbl_usersdb SET username= '${username}', email= '${email}', password= '${password}', phone_number= '${phone_number}' WHERE id= '${id}'`
    };

    client.query(query_request)
        .then(r => { console.log('1'); success(req, res, r, 200); })
        .catch(e => { console.log('2'); success(req, res, e.stack, 200); })
});

router.get('/list', async function (req, res) {
    
    const client = await getConnection();

    const query_request = {
        text: 'select * from tbl_usersdb'
    };
    client.query(query_request, (err,result) => {
        res.send(result.rows)
    })
       
});

router.get('/all_user_orm', async function(req, res){
    getUser.findAll({ attributes:['username','email','password','phone_number']})
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        console.log(err)
    });
})


//CRUD sequelize

router.get('/readme', async function(req, res) {
    try {
      const user = await user.findAll({
        atributes: ["id", "username", "email", "password", "phone_number"],
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
})


export default router;