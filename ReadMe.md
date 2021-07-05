The project create a set of Rest-APIs for POST/GET/UPDATE/DELETE APIs:

- /customers – GET all customers (params = [])
    
- /customers/:id – GET a customer by Id (params = [id])
    
- /customers – POST a customer ( params = [firstname,lastname,age])
    params = [firstname,lastname,age]
- /customers/update/:id – UPDATE a customer by Id (params = [id,firstname,lastname,age])
    
- /customers/delete/:id – DELETE a customer by Id (params = [id])
    

Deployed at : https://express-crud-example00.herokuapp.com/