import express from 'express';
import { api } from './config/config.js';
import user from './router/user.js';

const app = express();  

//ROUTERS
app.use('/api_v1/user', user);

//Servidor activo
app.listen( api.port ,() => {
    console.log(`Server on port => ${api.port}`);
});
