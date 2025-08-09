const swaggerJsdoc = require('swagger-jsdoc');


const options = {
    definition: {
      // Correct version specification (OpenAPI 3.0.0)
      opeanpi: '3.0.0',
      info: {
        title: 'Library API Project',
        version: '1.0.0',
        description: 'This is a backend project to mantain a library inventory | Daniel Mora',
      },
      servers: [{ url: 'http://localhost:3000' }],

  },
  apis: ['index.js'],
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = {
    openapiSpecification
}
