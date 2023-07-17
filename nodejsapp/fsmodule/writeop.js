 
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

// 1. The read server path aka the path for the Host that is running the current file

let __fileName1 = fileURLToPath(import.meta.url);

let filePath = path.join(__fileName1, './../../files/b.txt');

// 1. Creat a new File
// If the file is not there it will be created
// and data will be writte in it 
fs.open(filePath, 'w', (error,file)=>{
    if(error){
        console.log(`Error in creating file ${error.message}`);
        return;
    }
    console.log('====================================');
    console.log(`File created successfully ${file}`);
    console.log('====================================');
});

// 2. Write data in the file
// Paraeter 1: The File path to be written
// Parameter 2: The data written to the file
// Parameter 3: The callback that will be executed for error or success
fs.writeFile(filePath, 'The James Bond is superb Spy', (error)=>{
    if(error){
        console.log(`Error in writing data file ${error.message}`);
        return;
    }
    console.log(`Data is written successfully`);


// 3. Append data in the file

fs.appendFile(filePath, '. He is from MI16.',(error)=>{
    if(error){
        console.log(`Error in appending data file ${error.message}`);
        return;
    }
    console.log(`Data is appended successfully`);
});
});

