const router = require('express').Router();
const {Books} = require('./booktable');

const getAllBooks = async (req, res) => {
    const books = await Books.findAll({});
    res.send(books)
}
const getBook = async (req, res) => {
    const id = req.params.bookid
    const book = await Books.findByPk(id);
    res.send(book)
}
router.get('/books',getAllBooks);
router.get("/books/:bookid", getBook);

module.exports=router;
