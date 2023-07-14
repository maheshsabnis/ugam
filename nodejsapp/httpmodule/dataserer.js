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







