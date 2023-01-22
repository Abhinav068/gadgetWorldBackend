const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { DataModel } = require('../model/product.model');

require('dotenv').config();
const key = process.env.key;

const productRouter = Router();

productRouter.get('/', async (req, res) => {
    // console.log(req.headers);
    const token = req.headers.authorization;
    const id = jwt.verify(token, key)
    // console.log(id);
    const data = await DataModel.find();
    res.json({ data });
})

// /product 
// /product/update 
// /product/delete


productRouter.post('/create', async (req, res) => {
    const { name, image, category, ram, brand, processor, frontCamera, rearCamera, releaseDate, price, pricelink } = req.body;
    const post = new DataModel({ name, image, category, ram, brand, processor, frontCamera, rearCamera, releaseDate, price, pricelink })
    // console.log(post);
    await post.save();
    res.send(`post created`)
})
productRouter.patch('/update/:postId', async (req, res) => {
    // console.log(req.headers);
    const postid = req.params.postId;
    const post = await DataModel.findOne({ _id: postid })
    if (post) {
        await DataModel.findOneAndUpdate({ _id: postid }, req.body);
        res.send("data has been updated");

    }
    else {
        res.send('post not found')
    }

})
productRouter.delete('/delete/:postId', async (req, res) => {
    const postid = req.params.postId;
    const post = await DataModel.findOne({ _id: postid })
    if (post) {

        await DataModel.findOneAndDelete({ _id: postid }, req.body);
        res.send("data has been deleted");

    }
    else {
        res.send('post not found')
    }
})

module.exports = { productRouter }