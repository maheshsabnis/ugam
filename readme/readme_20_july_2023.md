# Challanges with Microservice Architecture
    - Deployment as an automated process
        - Contineous Integration/ Continueous Delivery (CI/CD) pipeline
            - DevOps
                - Github Actions
                    - CI/CD Pipeline
                - GitLab
                - Azure DevOps
                - AWS DevOPs    
    - Communication Across Microservices
        - Syncronous Communication 
            - Services talks to each other over HTTP Protocol
            - Unless the Called service (Service 2) does not return the response, the caller service (Service 1) cannot completes its execution
        - Asynchronous Communication
            - This is recommended because this is No-Blocking Communication across Microserevices
            - Service 1 will write data to Messaging Services or May be a Distributed Cache and Service 2 will be notifiy when the data is present in the Messaging Service or Distributed Cache       
    - Providing a Single Endpoint for accessing multiple Microservices 
        - A mechanism to create a gateway service to access mutiple microservices using a Single Endpoint
            - API Gateway
                - Express Gateway
                    - Programmable gateway
                - Azure API Gateway
                - AWS API Gateway
                - Ingress Gateways for Kubernetes  
            - Express Gateway
                - Used in the case when you are building Microservices using Node.js and you do not want to rely on the hosting env. (e.g. Cloud) for gateways (because of COST)   
                
                - npm install --save express express-gateway
                - npm install --save--dev @babel/core @babel/node @babel/preset-env

                - A gateway.config.yml file for following
                    - API Service PORT
                    - Admin PORT for Gateway Configuration Management
                    - apiEndpoints
                        - define table for all actual Services
                        - the PATH of the actual API that will process the request 
                    - serviceEndpoints
                        - define the http address for actual services     
                        - The server's HTTP address
                    - policies
                        - The way the APIs will be accessed based on the following guidelines
                            - security
                            - rate limitting aka no of requets can be made in a poerticular time
                    - pipeline
                        - Actual Request proceessing from API gateway to actual services this inclusde 'apiEndpoints', 'serviecEndpoints', and 'policies'      

            - The Express GAteway needs following additional configurations for the Gateway Host authentication
                - users.json
                - credentials.json
                - applications.json                
    - Security 
        - Basic User Based AUthentication
        - Role Based Autorization
        - JSON Web Token (JWT) AUthorization
            - The JWT 
        - Cloud Based Security Features
            - Azure Active Directory (AAD)
            - Open Auth 
                - Third Party Authentication Tehniques
            - Passport Auth    
        - Token Based Authorization
            - Once the user loggs-in, the server issues a 512 bit randomly generated key to the client. The client has to store the key inside its own process and MUST pass this key to the server when want some data from the server
            - The server generates this with following infromation in it
                - Headers   
                    - The  Encryption Key for the CRedentials using ENcryption Algorithim
                - Payload
                    - The Claim (aka identity and access information ) of the user
                - Signeture 
                    - The Integrity Check of the Token
                    - This is generated using a 'secrey-Key'
                        - Secrey-Key is a digital identity sign to protect the information of the token
        - JSON Web Token has the package as follows
            - jsonwebtoken
                - The 'sign({user-object}, SECRET-KEY, {
                    EXPIRY-TIME,
                    ALOGORITHM-FOR-ENCRYPTION
                })'                    
                - The 'verify(TOKEN-RECEIVED-FROM-CLIENT, SECRET-KEY-FOR-INTEGIRY-CHECK, TOKEN-DECOD-CALLBACK)' method    

