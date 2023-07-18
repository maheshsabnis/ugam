import express from 'express';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const PORT = process.env.PORT || 7002;

const instance = express();

const serverPath = fileURLToPath(import.meta.url);

console.log(path.join(serverPath, './../../../../node_modules/bootstrap/dist/css'));

// Congigure the express pipeline to read Static files from the server for JS (jQuery) and CSS (bootstrap)
// The html page will not only refer the css and js file w/o path because the static path is alrerady configured on the server in Express Middleware using 'static()' method
instance.use(
    express.static(path.join(serverPath, './../../../../node_modules/bootstrap/dist/css'))
);
// The jQuery
instance.use(
    express.static(path.join(serverPath, './../../../../node_modules/jquery/dist'))
);
// Read HTML Views
instance.use(
    express.static(path.join(serverPath, './../../views'))
);

// define routing for various HTML pages from 'views' folder

const router = express.Router();

instance.use(router);
// respond the HTML from Express Server
// from the path the is configured in
// Middleware and now used as root on express server
router.get('/', (req,resp)=>{
    resp.sendFile('index.html', {
        root:  path.join(serverPath, './../../views')
    })
});

router.get('/home', (req,resp)=>{
    resp.sendFile('home.html', {
        root:  path.join(serverPath, './../../views')
    })
});

router.get('/contact', (req,resp)=>{
    resp.sendFile('contact.html', {
        root:  path.join(serverPath, './../../views')
    })
});

router.get('/about', (req,resp)=>{
    resp.sendFile('about.html', {
        root:  path.join(serverPath, './../../views')
    })
});

instance.listen(PORT,()=>{
    console.log(`UI App Started on Port ${PORT}`);
});