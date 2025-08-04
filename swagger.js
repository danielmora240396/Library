const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Library APIs',
        description: 'Documentation API',
    },
    host: 'https://library-ten-psi.vercel.app',
    schemes: ['http']
}

const outputFile = './swagger_output.json';
const endpointsFiles = ['index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');
})