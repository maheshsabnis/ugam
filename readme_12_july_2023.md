# Cross-Origin-Resource-Sharing (CORS)
    - The JS app is loaded in browser from different Origin (Domain)
    - The Server which is requested from the JS loaded in browser from different origin MUST be registered in allowed list of the Server-Side app
    - If it is not registered then CORS error will be generated from Server-Side App
    - Cases of CORS
        - Same Physical Server (Machine) for Both App but there Hosting PORTs are different
            - e.g.
                - 192.168.10.20, address of the machine
                - Server-Side is 192.168.10.20:5001
                - Front-End is 192.168.10.20:5002   
        - Different Hosting Machines
    - Solve the Error
        - Recommendations are the server-side MUST register the Allowed List for Origins so that the Browser having JS from Origin can access the Server-Side app
            - Allowed List Configuration
                - NAme of the Origin
                - Allowed HTTP Method e.g. get/post/put/delete
                - Allowed HTTP Headers e.g. AUTHORIZATION
        - From the Origin the CORS Headers Can be configuired in HTTP Call (Think Twice before doing this)
            - datatype: 'jsonp'
            - corssDomain: true
            - headers :{
                 Accept-Control-Allow-Origin: "*" 
            }
