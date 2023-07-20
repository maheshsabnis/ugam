import { Users } from './users.js';
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

class DataAccess {
    getEmployees(req,resp){

        // 1. check for the credentials
        // 1.a read the request and if it does not have the
        // 'authorization' header then generate 
        // 401 error 

        if(!req.headers.authorization){
            return resp.status(401).send({
                message: 'Please authenticate' 
            });
        }

        // 1.b. Read header and the credentials
        // from the authorization value
        let headers = req.headers.authorization;
        // 1.c. split credentials based on ':'
        // the result will be [username,password]
        let credentials = headers.split(':');
        // 1.d. check the credentials for access
        console.log(`credentials = ${JSON.stringify(credentials)}`);
        // 1.d.1. check for username
        let user = Users.filter(u=>u.UserId === credentials[0].trim());
        
        if(user.length === 0){
            return resp.status(401).send({
                message: 'Invalid User Name' 
            });
        }

        // 1.e. Chek for the password match

        if(user[0].Password.trim() !== credentials[1].trim()){
            return resp.status(401).send({
                message: 'Invalid Password' 
            });
        }

        return resp.status(200).send({
            status: 'Login Successful',
            message: 'Employees Data',
            data: employees
        });
    }
    saveEmployee(req,resp){
        // read body
        const emp = req.body;
        employees.push(emp);
        return resp.status(200).send({
            message: 'Employees with added Data',
            data: employees
        });
    }
}

// Export the DataAccess class a Custom Node.js module
// SO that it can be imported in otehr Node.js module
export default DataAccess;