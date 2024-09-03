import express from 'express';
import 'dotenv/config';
import initApp from './src/initApp.js';
//import { sendEmail } from './src/Utils/sendEmail.js';

const app= express();
 
initApp(app,express);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}!`)
})