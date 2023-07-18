# Express.js
- The Node.js defacto frameowrk for building following types of apps
    - REST APIs
    - Web Application with Single and Multi-Page
- Offerings
    - Http Request Processing
        - Http Request
            - GET , POST, PUT, and Delete
        - Http Response 
            - JSON, Binary, Xml, Html
    - Routing    
        - URL based navigation for http requests
            - API
            - HTML Pages
    - Middleware
        - An Object Model that will load additional configuration objects (Software Components) those are loaded to provide smooth and value added execution for Http Request received by Express.js as well as the response generated from it
        - Express.js uses an HTTP pipeline for request processing which is used to load various software components as follows
            - cors
            - session
            - security
            - caching
            - ... and many more

# Packages for Express

- Express package
    - npm install --save express

    - The 'express' object
        - Parse JSON
        - encode the URL for reading data from body
        - The 'use()' method for adding middlewares
            - cors()
            - json()
            - urlencoded()
        - The 'static()' method
            - for managing the HTML, CSS, and JavaScript resources on the server
        - The 'listen()' method
            - The HTTP Endpoint for accepting requests
        - The HTTP Methods
            - get()
            - post()
            - put()
            - delete()

        - The 'Router' object for creating a Route Table foer either UI pages or for REST APIs
            - Routing table methods
                - get(), post(), put(), and delete()      
        - All HTTP and Router methods (get,post,put, and delete) accepts 'RequestHandler' object 
            - RequestHandler
                - This internally manages acallback for HTTP Request Processing
                    - Reads HTTP Headers
                    - Reads HTTP Body

- Cross-Origin-Resource-Sharing Package
    - npm install --save cors      
- MS-Sql for Data Access
    - npm install --save mssql

    - Various asynchronous methods for Data Access
        - The 'connect()' method to connect to SQL Server Database using the Connection String
        - The 'query()', method to execute SQL Queries (CRUD) operations with database
            - This ethod returns 'IResult' object that contains the query execution response from database
````javascript
     await sql.connect()
     await sql.query()
````   

