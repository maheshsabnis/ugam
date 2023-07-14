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