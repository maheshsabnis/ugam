# Node.js
- The Srever-Side JS Engine
- Programming is done using JS Object model
    - The JS Object Model is called as 'Module' aka 'Node.js Module'

# Node.js Modules
- A set of libraries of standard classes (or objects) for following
    - Web Server Creation
    - File Access
    - Streaming
    - REST API Creation
    - Web App Creation
    - Security
    - Cryptography
    - Build
    - .... and many more
    - refer https://www.nodejs.org

- ES 6+ Programming Support is now available
    - ESx
        - 6,7,8,9,10, next
    - TypeScript
- The 'node' CLI
    - Used to execute the Node.js application code (aka JavaScript file) on server
- Excepit JS UI object Model e.g. alert(), prompt(), window, document, etc. all other JS programming standards are used by Node.js     

- Module Loading Mechanism
    - Older Standard
        - var IDENTIFIER = require('MODULE-NAME');
            - MODULE-NAME
                - The Node.js standard or custom module that will loaded in the current Node.js app process
                - This module will be cached throughout the Node.js app so thta all code of the app can use this module
                - If the MODULE-NAME is not standard module, then it will be loaded from the current application path (the pather from where the app is executing)
                - If the Module is not found, the Module_Not_Found exception will be thrown
            - IDENTIFIER
                - The Module object that is used to acceess methods from MODULE-NAME   
````javascript
     // file1.js
     function doWork(){.....}
     module.exports = doWork;

    // file2.js
    var fn = require('./file1');
    fn.doWork();
````
    - ES 6+ srandard    
        - import 'MODULE-OBJECT' from 'MODULE-NAME'
            - MODULE-OBJECT
                - The 'exported' type(?) from the 'MODULE-NAME'
                    - the 'type' can be any of the following
                        - Class
                        - Function
                        - Array
````javascript
    // file1.js
    export function doWork(){.....}

    // file2.js
    import {doWork} from './file1.js';
````

    - Node.js uses the 'ModuleResolution'
        - Perform a lookup for the module based on the file-path

- Node.js Application Configiration
    - The 'package.json'
        - File created for defing the Runtime (production) and dev and test  configuration
            - the 'npm init -y' command is used to create package.json with defaults

            - Important Sections of package.json
                - 'dependencies'
                    - The list of all modules they are mandatory to run the Node.js app, during Dev, Test, and Production 
                - 'devDependencies'
                    - The list of all modules required only during Development and Testing
                - 'script'
                    - The Node.js CLI Command
````javascript
                    "script":{
                        "start": /* Command to Run the aplication */
                        "test": /* Command to Test the aplication */
                        "build": /* Command to Build the aplication */
                    }
````
                    - USe the CLI Command as follows from the command prompt
                        - npm start | npm run start
                    - To Contineously run the Node.js app on the server use 'nodemon' package
                        - npm install --global nodemon
                        - nodemon JS-FILE-NAME     

````javascript
                    "script":{
                        "start": node index.js
                        "test": /* Command to Test the aplication */
                        "build": /* Command to Build the aplication */
                    }
````
                   - if command is
                        - npm run start
                            - This will invoke 'node index.js' and the index.js file will be executed inside the Node.js Rumtime  
# Node.js Programming
    - the 'http' module for creating Web Server
        - Used to create web server using 'createServer()'
        - Requests are listen using 'listen()' method
````javascript
/* import the HTTP Module */
import http from 'http';


/* Define the PORT Number */

/* process.env, the current  Node.js Process ENv. PORT is the default free port that can be used for listeneing requests */
const port = process.env.PORT || 5006;
/* Create Http Server */
/* createServer(RequestListener) 
  RequestListener: The Object thet listen HTTP Request on the
  PORT and start processing it and then generate HTTP Reponse
*/
let server = http.createServer((request, response)=>{
   /* Processing Logic Here */ 
   response.writeHead(200, {'Content-Type': 'text/html'});
   /* Write rge Response */
   response.write(`Hello Web Server...`);
   /* Complete the response */
   response.end(); 
});


/* Start listing on the PORT */

server.listen(port);
console.log(`Server Started on Port = ${port}`);
````
        - The IncommingMessage and ServerResponse classes
            - ServerResponse, used to send response against the request
            - IncommingMessage, represents the incomming Http request
                - properties
                    - method
                        - Detect the HTTP Method, GET, POST, PUT, DELETE
                    - headers
                        - USed to Read Request Heaqders
                    - url
                        - The Request URL        
                - Event method
                    - The 'on()'
                        - Executed for POST / PUT request so that the data can be read over the request using following data processing states
                            - data
                                - Start receiving the data
                            - end
                            - error
                    - The 'off()'        
````javascript
/* Reading Http Header and then providing data */
import http from 'http';

/* Data Storage */
let employees = [
    {EmpNo:1, EmpName: 'A', DeptName: 'D1'},
    {EmpNo:2, EmpName: 'B', DeptName: 'D2'},
    {EmpNo:3, EmpName: 'C', DeptName: 'D3'},
    {EmpNo:4, EmpName: 'D', DeptName: 'D1'},
    {EmpNo:5, EmpName: 'E', DeptName: 'D2'},
    {EmpNo:6, EmpName: 'F', DeptName: 'D3'},
    {EmpNo:7, EmpName: 'G', DeptName: 'D1'},
    {EmpNo:8, EmpName: 'H', DeptName: 'D2'},
    {EmpNo:9, EmpName: 'I', DeptName: 'D3'},
];

/*create server*/

const server = http.createServer((req,resp)=>{

    /* Read the request header */
    let id = parseInt(req.headers.id);
    console.log(id); 
    if(id === undefined || id === 0){
        /* Send all data */
        resp.writeHead(200, {'Content-Type': 'application/json'});
        /* JSON response for employees data */
        resp.write(JSON.stringify(employees));
        resp.end();
    } else {
        /* filter data from the employees based on id */
        let emp = employees.find((e)=>{
            return e.EmpNo === id;
        });
        /* response of employee based on the 'id' received from HTTP Request header */
        resp.writeHead(200, {'Content-Type': 'application/json'});
        /* JSON response for employees data */
        resp.write(JSON.stringify(emp));
        resp.end();
    }

});
server.listen(5006);
console.log('Server started on 5006');

````

    - the 'fs' module for wortking with the File System
    - the 'express' for REST APIs and then Microservice
        - JWT for Security
        - node-sql for data access                             