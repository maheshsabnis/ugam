# File Module aka the 'fs' module
- Read and Write operation on the File Resources on Hosting Env
    - Windows Fs
    - Linux Fs
    - macOS Fs
- The 'fs' module uses following object model to interact with the OS using Node.js
    - File Modes
    - Dictionaries    
- The 'fs' module error Management and hence for the Node.js apps
    - Either use try..catch block for JavaScript with the 'Error' class
    - OR
    - Check if the module provides Error Handling
- If the File has to be open and read on server completely to send the response then use the Synchronous Operations in this case, use the try..catch block for handling errors related to file resources
    - e.g.
        - File Not FOund
        - File is locked
        - Read / Write Operations filed
- If the File is having Large Size and will take more tike to read / write which may result into the thread block and hence cost for the performnce (and responsiveness), then use Asynchronous Operations
    - FOr Error handling use the the Async Callback function's Error Object (recommended)         
    - Internally the Node.js uses the Promise object for Async State manegemtn duriung the execution and based on the state of the execution it either returns Success (Resolve) or Fail (Reject)   

    - readFile(), writeFile(), readDir(), are async methods
    - readFileSync(), writeFileSync(), are sync methods       

- The 'path' module
    - Used to locate and join the File Resource Path to Server (Host) path wheere the Node.js app is running
        - The 'join()' method to link the physical path of the file to Node.js app
- The 'url' module
    - Used to trasform the Relative Path to Web (Absolute) Path so that the file resources can be easily accessible to Node.js Env       
        - The 'fileToPath()' method to convrert the physical path to the absoulte path for Node.js app