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

  
     
     /* detect the method and accrdingly implement the request processing */
     /* the GET request */
     if(req.method === "GET"){
          /* Read the request header */
    let id = parseInt(req.headers.id);
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
     }


     /* The POST Request */
     if(req.method === "POST") {
         /* CORS Settings*/
            /* Allow requests from all origins */
        resp.setHeader('Access-Control-Allow-Origin',"*"); 
            /* Allow requests from all HTTP Methods GET/POST/PUT/DELETE */
        resp.setHeader('Access-Control-Allow-Methods',"*");

        console.log('The POST Request');
        let receivedData;
        /* start eveluating the request */
        /* chunk is the stream of received data by the server over the request */
        req.on('data', (chunk)=>{
            /* stream parsed into the JSON */
            receivedData =  JSON.parse(chunk);
        });

        /* complete the data processing and return response */

        req.on('end', ()=>{
            employees.push(receivedData);
            resp.writeHead(200, {'Content-Type': 'application/json'});
            /* JSON response for employees data */
            resp.write(JSON.stringify(employees));
            resp.end();
        });
     }

      /* The PUT Request */
      if(req.method === "PUT") {
        console.log('The PUT Request');
        /* Read id from headers*/
        /* based on id search employee */
        /* modify the same searched employee object from array */
        /* respond the modified object */
        resp.write('Received PUT Request');
        resp.end();
      }

       /* The DELETE Request */
     if(req.method === "DELETE") {
        console.log('The DELETE Request');
          /* Read id from headers*/
        /* based on id search employee */
        /* delete the record from array (splice) method */
        /* respond the modifed  array*/
        resp.write('Received DELETE Request');
        resp.end();
     }



});


server.listen(5006);
console.log('Server started on 5006');
