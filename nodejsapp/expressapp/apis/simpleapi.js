import express from 'express';
import cors from 'cors';

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

// REST Methods
instance.get('/api/products',(req,resp)=>{
    resp.status(200).send({message: 'Success', data: [{id:101, name:'P1'}, {id:102, name:'P2'}]});
});

instance.post('/api/products',(req,resp)=>{
    // Read body
    console.log(req.body);
    resp.status(200).send({message: 'Success', data:req.body});
});

// Start Listening

instance.listen(PORT, ()=>{
     console.log(`Srever started on PORT : ${PORT}`);
});



