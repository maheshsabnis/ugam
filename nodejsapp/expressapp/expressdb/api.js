import express from 'express';
import cors from 'cors';
import DataAccess from './dataaccess.js';

// define port

const PORT = process.env.PORT || 7001;

// create an express instance
const instance = express();
// add the CORS policy in middleware
instance.use(cors({
    origin:'*', // all origins
    methods: '*', // all methods
    allowedHeaders: '*' // all headers
}));
// add the JSON 
instance.use(express.json());
// URL encoding so that the body can be read
instance.use(express.urlencoded({extended:false}));

const da = new DataAccess();

// const isSuccess = await da.connectToDb();
// if(!isSuccess)
//   throw new Error(`The Database Srever is not connected ${error}`);

 
instance.get('/api/depts', da.getDepartments);

instance.post('/api/depts', da.saveDepartment);
// Passing the Request Header Parameter
instance.put('/api/depts/:id',da.updateDepartment);

instance.delete('/api/depts/:id',da.deleteDepartment);

// Start Listening

instance.listen(PORT, ()=>{
     console.log(`Srever started on PORT : ${PORT}`);
});



