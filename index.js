const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const helmet = require('helmet');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const books = require('./data/books');

const urlEncoderParser = bodyParser.urlencoded({ extended: false });

const jsonParser = bodyParser.json();

const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDefaults['upgrade-insecure-requests'];

app.use(helmet({
    contentSecurityPolicy: { directives: cspDefaults }
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


/**
 * @route GET api/books
 * @description This returns the list of all available books
 * @response 200
 */
app.get('/api/books', (req, res) => {
    res.json(books).status(200);
});

app.post('/api/books', jsonParser, (req, res) => {

    if(!req.body) res.status(404).json({ error: 'No body attached' });

    res.status(400).json({ success: true, user: req.body });
})

app.get('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);
    if(isNaN(id)) {
        return res.status(500).json({ error: 'id must be a number'});
    };

    const book = books.books.find(b => b.id === id);
    if(!book) res.status(404).json(null);
    res.json(book).status(200);
});

app.get('/api/books/category/:name', (req, res) => {
    const category = req.params.name;
    if(!category) res.status(500).json({error: 'category name must be valid'});

    const categoryBooks = books.books.filter(b => b.category.toLowerCase() === category.toLowerCase());

    if(!categoryBooks || categoryBooks.length === 0) res.status(404).json({ message: `No books associated to ${category} category` });

    res.json({ books: categoryBooks }).status(200);
});


app.listen(port, () => {
    console.log('Example of an app listeing in port...', port);
})