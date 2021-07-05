module.exports = function (app) {

    var customers = require('../controllers/customer.controller.js');
    // Display API URLS
    app.get('/', customers.home)
    // Create a new Customer
    app.post('/customers', customers.create);

    // Retrieve all Customer
    app.get('/customers', customers.findAll);

    // Retrieve a single Customer by Id
    app.get('/customers/:id', customers.findOne);

    // Update a Customer with Id
    app.put('/customers/:id', customers.update);

    // Delete a Customer with Id
    app.delete('/customers/:id', customers.delete);
}