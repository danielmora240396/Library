const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const openapiSpecification = require('./swagger');

const swaggerUi = require('swagger-ui-express');

const books = require('./data/books');

const urlEncoderParser = bodyParser.urlencoded({ extended: false });

const jsonParser = bodyParser.json();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification.openapiSpecification));

app.use('/api-docs', express.static(require('path').join(__dirname, 'node_modules/swagger-ui-dist')));

app.get('/swagger.json', (req, res) => {
    console.log(openapiSpecification)
  res.json(openapiSpecification);
});

/**
 * @openapi
 * /api/books:
 *   get:
 *     description: Returns the list of books available in the library
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *   post: 
 *      description: Allows to insert a new book into the library list
 *      responses: 
 *          400:
 *              description: Returns the object inserted
 *          404:
 *              description: Returns 404 in case body is not attached to the request
 *      
 */
app.get('/api/books', (req, res) => {
    res.json(books).status(200);
});



app.post('/api/books', jsonParser, (req, res) => {

    if(!req.body) res.status(404).json({ error: 'No body attached' });

    res.status(400).json({ success: true, user: req.body });
})

/**
 * @openapi
 * /api/books/{id}:
 *   get:
 *     description: Returns the book with the ID passed through the params.
 *     responses:
 *       200:
 *         description: Returns the book with the ID passed through the params.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *      
 *      
 */

app.get('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);
    if(!id) {
        return res.status(500).json({ error: 'ID was not provided'})
    }

    if(isNaN(id)) {
        return res.status(500).json({ error: 'id must be a number'});
    };

    const book = books.books.find(b => b.id === id);
    if(!book) res.status(404).json(null);
    res.json(book).status(200);
});

/**
 * @openapi
 * /api/books/category/{id}:
 *   get:
 *     description: Returns all the books associated with one category
 *     responses:
 *       200:
 *         description:  Returns all the books associated with one category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *      
 *      
 */

app.get('/api/books/category/:name', (req, res) => {
    const category = req.params.name;
    if(!category) res.status(500).json({error: 'category name must be valid'});

    const categoryBooks = books.books.filter(b => b.category.toLowerCase() === category.toLowerCase());

    if(!categoryBooks || categoryBooks.length === 0) res.status(404).json({ message: `No books associated to ${category} category` });

    res.json({ books: categoryBooks }).status(200);
});


app.listen(port, () => {
    console.log('Example of an app listeing in port...', port);
});

module.exports = app;