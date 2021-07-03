The project create a set of Rest-APIs for POST/GET/UPDATE/DELETE APIs:

- /api/customers – GET all customers (params = [])
    
- /api/customers/:id – GET a customer by Id (params = [id])
    
- /api/customers – POST a customer ( params = [firstname,lastname,age])
    params = [firstname,lastname,age]
- /api/customers/update/:id – UPDATE a customer by Id (params = [id,firstname,lastname,age])
    
- /api/customers/delete/:id – DELETE a customer by Id (params = [id])
    

Deployed at : https://polar-island-70285.herokuapp.com/