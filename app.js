import express from 'express';
import cors from 'cors';
import { api } from './config/config.js';
import user from './router/user.js';
import fathers from './router/father.js';
import sons from './router/son.js';
import image from './router/img.js';


const app = express();  
app.use(cors());

//ROUTERS
app.use('/api_v1/user', user);
app.use('/api_v1/fathers', fathers);
app.use('/api_v1/sons',sons);
app.use('/api_v1/image',image);

//Servidor activo
app.listen( api.port ,() => {
    console.log(`Server on port => ${api.port}`);
});
