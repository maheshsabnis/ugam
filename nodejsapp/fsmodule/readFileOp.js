import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

// 1. The read server path aka the path for the Host that is running the current file

let __fileName1 = fileURLToPath(import.meta.url);

console.log(__fileName1);

// 2. Combine with the file path that will be accessed byb the current application. In this case it is the 'files' folder

let filePath = path.join(__fileName1,'./../../files/a.txt');
console.log(filePath);

// 3. Read the file Synchronously
/* Use the try..catc block explicitly to handle an error and prevent the app from crash */
try {
    let data = fs.readFileSync(filePath);
    console.log(`Synhcronous read = ${data}`)
}catch(e){
    console.log(`Error ${e}`);
}


/* An async Operations */
/*
 Parameter 1: The File Path Including file name from which rthe data is read
 Parameter 2: the Encoding to read the text data from the file
 
 Parameter 3: The Callback function with following 2 parameters
    - p1: The erroe condition that will be evaluated first if the resource (file) is not accessible or not present
    - p2: The data read from the file
 
*/
fs.readFile(filePath, {encoding:'utf8'}, (error,data)=>{
 if(error) {
    console.log(`Error Occred ${error.message}`);
    return;
 }
 console.log('====================================');
 console.log(`Data from the File ${data}`);
 console.log('====================================');
});

console.log('Async doen');

console.log(`Some More Operations`);
