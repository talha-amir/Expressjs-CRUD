module.exports = function(app) {

    // function home(req, res) {

    //     res.send("https://github.com/talha-amir/Expressjs-CRUD");

    // }

    var customers = require('../controllers/customer.controller.js');

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