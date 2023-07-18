// import the database provider module
import sql from 'mssql';
import DbConnect from './dbconnect.js';

class DataAccess {
    
    constructor(){
        this.isConnectionSuccessful = false;
    }
    // async connectToDb(){
    //     try {
    //         const connection = await sql.connect('Server=127.0.0.1;Database=UCompany;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCeritificate=true');
    //         this.isConnectionSuccessful = connection.connected;
    //         return this.isConnectionSuccessful;
    //     }catch(ex){
    //         return this.isConnectionSuccessful;
    //     }
    // }

    async getDepartments(req,resp){
        try {
            // const connection = await sql.connect('Server=127.0.0.1;Database=UCompany;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCeritificate=true');
            const db = new DbConnect();
            console.log(`Is Success ${await db.connectToDb()}`);
            if(await db.connectToDb()){
             
               // read all data from Deparement table
               const result = await sql.query`select * from Department`;
               
               return resp.status(200).send({
                    message: 'Data Read Successfully',
                    data: result.recordset // rows from Department Table
               });
            }
        }catch(ex){
            return resp.status(500).send({
                message:`Some Error Occurred ${ex.message}`
            });
        }
    }

    async saveDepartment(req,resp){
        try {
            // Read body
            const dept = req.body;
            console.log(dept)
            const connection = await sql.connect('Server=127.0.0.1;Database=UCompany;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCeritificate=true');
             
               // read all data from Deparement table
               const result = await sql.query`insert into Department (DeptNo,DeptName,Location,Capacity) values(${parseInt(dept.DeptNo)}, ${dept.DeptName}, ${dept.Location}, ${parseInt(dept.Capacity)})`;
               
               return resp.status(200).send({
                    message: 'Data Inserted Successfully',
                    data: result.recordset // rows from Department Table
               });
        }catch(ex){
            return resp.status(500).send({
                message:`Some Error Occurred ${ex.message}`
            });
        }
    }

    async updateDepartment(req,resp){
        try {
            // Read body
            const dept = req.body;
            const deptNo = parseInt(req.params.id);
            console.log(`Header parameter ${deptNo}`);
            
            const connection = await sql.connect('Server=127.0.0.1;Database=UCompany;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCeritificate=true');
             
               // read all data from Deparement table
               const result = await sql.query`update Department set DeptName= ${dept.DeptName}, Location = ${dept.Location}, Capacity = ${parseInt(dept.Capacity)} where DeptNo=${deptNo}`;
               
               return resp.status(200).send({
                    message: 'Data updated Successfully',
                    data: result.recordset // rows from Department Table
               });
        }catch(ex){
            return resp.status(500).send({
                message:`Some Error Occurred ${ex.message}`
            });
        }
    }

    async deleteDepartment(req,resp){
        try {
            // Read body
            const dept = req.body;
            const deptNo = parseInt(req.params.id);
            
            
            const connection = await sql.connect('Server=127.0.0.1;Database=UCompany;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCeritificate=true');
             
               // read all data from Deparement table
               const result = await sql.query`delete  Department where DeptNo=${deptNo}`;
               
               return resp.status(200).send({
                    message: 'Data deleted Successfully',
                    data: result.recordset // rows from Department Table
               });
        }catch(ex){
            return resp.status(500).send({
                message:`Some Error Occurred ${ex.message}`
            });
        }
    }
}

export default DataAccess;