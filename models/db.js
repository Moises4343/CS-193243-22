import Sequelize from 'sequelize';
import { db } from '../config/config.js';

const sequelizeClient = new Sequelize(db.database, db.user, db.password, {
    // dialectOptions: {
    //     ss1: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // },
    host: db.host,
    dialect: 'postgres',
});


sequelizeClient.sync({ force: true })
    .then(() => {
        console.log('conectado')
    })
    .catch((err) => {
        console.log('no se conecto', err)
    });

export const getData = { sequelizeClient };