const express=require('express');
const cors=require('cors');
const { connection } = require('./config/db');
const { userRouter } = require('./routers/user.router');
const { checkLogin } = require('./validators/login.validator');
const { productRouter } = require('./routers/product.router');
const app=express();
require('dotenv').config();

app.use(cors({origin:"*"}));
app.use(express.json());
const port=process.env.port;


app.get('/',(req,res)=>{
    res.send('hompage');
})

app.use('/users',userRouter);
app.use(checkLogin);
app.use('/products',productRouter);

app.listen(port,async()=>{
    await connection
    console.log(`listening at ${port}`);
})