const router = require('express').Router();
const { Books } = require('./booktable');

// Get all books
const getAllBooks = async (req, res) => {
    const books = await Books.findAll({});
    res.send(books);
};

// Get a single book by ID
const getBook = async (req, res) => {
    const id = req.params.bookid;
    const book = await Books.findByPk(id);
    res.send(book);
};

// Save a new book
const saveBook = async (req, res) => {
    const newBook = req.body; // Assuming you send the book data in the request body
    const createdBook = await Books.create(newBook);
    res.send(createdBook);
};

// Update a book by ID
const updateBook = async (req, res) => {
    const id = req.params.bookid;
    const updatedBook = req.body; // Assuming you send the updated book data in the request body
    await Books.update(updatedBook, { where: { id } });
    res.send({ message: 'Book updated successfully' });
};

// Delete a book by ID
const deleteBook = async (req, res) => {
    const id = req.params.bookid;
    await Books.destroy({ where: { id } });
    res.send({ message: 'Book deleted successfully' });
};

// Routes
router.get('/books', getAllBooks);
router.get('/books/:bookid', getBook);
router.post('/books', saveBook);
router.put('/books/:bookid', updateBook);
router.delete('/books/:bookid', deleteBook);

module.exports = router;
