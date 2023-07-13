# FullStack App Development Strategies
- Understand Business Domain
- Plan for 
    - Data Storage
    - The Design Approch of the Application
        - Monolithic App
        - Microservices App
        - Micro-FrontEnd
    - Server-Side Runtime Stack
        - .NET Core
        - JAVA
        - Node.js
        - Python
        - php
    - Deployment Starategies
        - On-Premises
        - On Cloud
    - The Strategies for following
        - Data Access STructure
        - Identity Managment
        - Validations
        - Deployment
        - Testing    
    - The Forn-End Technologies

- The Full-Stack App Development
    - Code-Sharing for Isomorphic Apps
    - Modularity
    - Communication Management across the layers of the Application       

# Modularity
    - Divide the big app system (Logic) into small autonomous and isolated set of libraries
        - Seperate Modules for
            - Business
            - Data Access
            - UI
            - Presenter
            - Data Management
            - Security
            - Validations
    - Offer following advantages
        - Maintainability
        - Testability
        - Deployment      
    - If the Module has a method that is performing any 'Async' operation, then make sure that this method return 'Promise' object and the caller of this method must use the Promise object and subscribe to it. THis will make sure that the caller will be delevered with the response when the Promise has the data.  
        - The Promise object had two methods
            - .then()
                - Success or Resolve
            - .catch()
                - Fail or Rejected
        - From ES 7 Onwards, if a method returns Promise object, then while calling the method in caller, we can use 'async' and 'await' keywords
            - The 'async' is a method modifier (applied on method), this means that, the method is performing some opertaions those return 'Promise' object.
            - The 'await' is applied on statement that represent a method call which is returing the promise object             

# Server-Side JS with Node.js

- Node.js
    - Ready to use Modueles for
        - Web Server, inbuilt
        - Data Access
            - choose the external module based on Relational or NoSQL Database
        - REST APIs
            - Various frameworks 
        - Security
            - Various libraries
        - File Managment , inbuilt
        - Streaming , inbuilt
        - Cryptography , inbuilt
        - Session Management
            - Based on REST API as well as the Web Applicaiton Server
        - Caching
            - Same as session management
        - ... any many more

- Mongo Express Angular Node (MEAN) 
- Mongo Express React Node (MERN)
- MySQL, MSSQL, PostgreSQL, etc for database     
- jQuery, Vue for Forn-End
- Feathers, Nest.js for REST API and Web Apps instead of Express  

- Node.js REST APIs for Microservices
- React, Angular, Vue, jQuery for Micro-FrontEnds



