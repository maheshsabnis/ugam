/* This is a complete server thatn will work on data as well as UI Files */

import http from 'http';
import fs from  'fs';
import path from 'path';
import {fileURLToPath} from 'url';

let __viewFiles = fileURLToPath(import.meta.url);

let viewDirPath = path.join(__viewFiles, './../../views');


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

const users = [
    {username:'mahesh', password:'mahesh'},
    {username:'tejas', password:'tejas'}
];


let server = http.createServer((req,resp)=>{

    if(req.url === "/api/get" && req.method === "GET"){
        resp.write(JSON.stringify(employees));
        resp.end();
        return;
    }

    if(req.url === "/api/get" && req.method === "POST"){

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

        return;
    }


    // check the url value and based on that return the html
    if(req.url === "/home"){
        readFileAndReturn(resp, 'home');
    } else {
        if(req.url === "/about"){
            readFileAndReturn(resp, 'about');
        } else {
            if(req.url === "/contact"){
                readFileAndReturn(resp, 'contact');
            } else {
                resp.writeHead(404, {'Content-Type':'text/html'});
                resp.write("The Resource You are lloking for is not found");
                resp.end();
            }
        }
    }

    
});

function readFileAndReturn(resp,url){
    fs.readFile(`${viewDirPath}/${url}.html`,{encoding:'ascii'},(error,file)=>{
        if(error) {
            resp.writeHead(404, {'Content-Type':'text/html'});
            resp.write("The Resource file You are lloking for is not found");
            resp.end();
        }
        resp.writeHead(200, {'Content-Type':'text/html'});
        resp.write(file);
        resp.end();
    });
}


server.listen(6070);
console.log('server starts on port 6070');





