import { Users } from './users.js';
import jsonwebtoken from 'jsonwebtoken';
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

// Create a Secret Key for Integrity check
const jwtSettings = {
    jwtSecret: 'mahesh007700hseham'
};

class DataAccess {
    authUser(req,resp){
        
        // 1. Reacd body for UserName and Password

        const userData = req.body;

        if(!userData){
            return resp.status(401).send({
                message: 'Please authenticate' 
            });
        }

        
        // 1.d.1. check for username
        let user = Users.filter(u=>u.UserId.trim() === userData.UserId.trim());
        
        if(user.length === 0){
            return resp.status(401).send({
                message: 'Invalid User Name' 
            });
        }

        // 1.e. Chek for the password match

        if(user[0].Password.trim() !== userData.Password.trim()){
            return resp.status(401).send({
                message: 'Invalid Password' 
            });
        }

        // Read the Current user
        const userObject = user[0];

        // Generate the token
        // P1: UserObject for which the token is generated
        // P2: The Signeture
        const token = jsonwebtoken.sign({UserId:userObject.UserId}, jwtSettings.jwtSecret, {
            expiresIn: 3600, // 1 hour
            algorithm: 'HS384'
        });
        
        // return the response with token
        return resp.status(401).send({
            access_token: token 
        });

    }
    async getEmployees(req,resp){

        // Autorize the user based on token
        // Token will always received through the 
        // Header

        if(!req.headers.authorization){
            return resp.status(401).send({
                message: 'Please authenticate' 
            });
        }

        // Read headers
        // Bearer [TOKEN-VALUE]
        const authHeader = req.headers.authorization;

        // Read the token
        // [TOKEN-VALUE]
        const token = authHeader.split(" ")[1]; 
        
        console.log(`Token ${token}`);

        // Decode the Token

        await jsonwebtoken.verify(token, jwtSettings.jwtSecret, async (error,decode)=>{
            if(error){
                return resp.status(401).send({
                    message: 'Invalid Token' 
                });  
            }
            // COnfigure the Decoded token to the
            // Current Request
            req.decode = decode;
            return resp.status(200).send({
                status: 'Login Successful',
                message: 'Employees Data',
                data: employees
            });
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