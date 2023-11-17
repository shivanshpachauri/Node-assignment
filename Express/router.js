const router = require('express').Router();
const {Books} = require('./booktable');

const getAllProducts = async (req, res) => {
    const books = await Books.findAll({});
    res.send(books)
}
router.get('/books',getAllProducts);

module.exports=router;