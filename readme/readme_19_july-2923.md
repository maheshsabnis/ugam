# Monolithic Apps
    - The Application is divided into several layers e.g. Data Access, Business Logic, Idenrtity, Utility, Validations, REST APIs, etc.
    - The application is hosted on a Single Production Server
    - Observations
        - Easy on On-Premises Deployment (the company owns the Infrastructure, Networking, Servers, Database, OS, Virtual Machines, Application Server, etc)
        - The compay MUST employ staff for managing the applications based on following challenges:
            - Availability, 24 * 7 * 365
                - Very less down time
                - 99.9999% up time   
                - There mauy be various clients like:
                    - Desktop apps
                    - Web App, server controlled
                    - Front-End Browser Apps
                    - Mobile Apps    
            - Scalability
                - The app MUST be capable to handle multiple concurrent requests
                    - Veritcal Scalability, Scale Up
                        - Enhance server's Capacility based on following
                            - Processors
                            - Memeory
                            - Storage
                            - Network Capacilities
                    - Horizontal Scalability, Scale Out
                        - Increase Number of servers 
                            - Demenads More Hardware
                            - More Space (Infra)
                            - More Power
                            - More Staff
                            - System Infra
                                - Networking across Servers
                                - Networking Across Multiple Databases
                                - Load Balancing
                                    - Hardware
                                    - Software       
                            - Distributed Information Storage for Clients (Crucial ***)
                                - Distributes Sessions
                                - Distributes Cache        
    - Challenge for Monolitic App
        - What if a layer is requiring maintenence, changes, or updates?
            - Change in Data Access 
            - Modification in Business Logic
            - Updates in security layer
        - Any modification in production app will have following impacts
            - The whole app is down
            - Interdependency across layers will couse heavy maintainence cost (In the form of time, human hours, application management) 
            - If the app is deployed across multiple servers the the modicitcation MUST be deployed across all servers
            - All layers MUST be tested for each modification to check the impact because of application changes
            - The existing users will face app non availabilty during the deployment time      
# Microservices               
 - "In short, the microservice architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies.

-- James Lewis and Martin Fowler (2014)"


    - An new Software Architecture guideline where the multi-layer monolitic app is divided across different small autonomous applications where
        - Each Workflow is independant Service with 
            - HTTP APIs
            - Business Logic
            - Valdiations
            - Data access
            - Database     
            - Deployed Separately                
        - The Microservice App can have its own technology Stack
            - Product Service, ASP.NET Core, with SQL Server Database
            - Search Service, Node.js, Express, MongoDB Database
            - Accounting and Payment Srevice, JAVA Springboot, Oriacl Database
            - Customer Service, ASP.NET Core with SQL Server
            -....
        - The App development can be started from Day 1

    - How to Manage the Development, Testing, and Deployment
        - Development, Team can choose the Technology as per the comfort, experties, and need
        - Testing, each technology stack has ites own testing tools
            - e.g.
                - Unit Testing Tools e.g. xUnit, jUnit, nUnit, etc.  
        - Deployment???           
            - Create a cluster and deploy the Microservice using 'an Image' on the cluster
                - What is Cluster?
                    - A Group or Set of Virtual Machines or Physical Servers  having
                        - Processing
                        - Memory
                        - Storage
                        - Networking
                        - OS
                        - Application Runtime
                        - Actual Application
                        - Database
                        - Security Patches
                    - A Physical Server may be haing multiple Virtual Machinins (VMs) Running on it and each VM will have
                        - Priocessing
                        - RAM
                        - Storage
                        - OS
                        - Application Runtime
                        - Actual Application
                        - Database
                        - Security Patches
                - What is an Image?
                    - Minituare of the Resources those are required to execute the application (or a service)
                        - Unlike a VM where we have a complete OS, an image has only required (or mandatory) OS Services to execute the application hosted in it.
                    - An image is Hosted (or executed) inside 'the container'
                        - a Logical group of the services or features used to execute application in the image along with the image   
                        - the physical resource management for the image is taken care by the container
                            - CPU
                            - MEMORY
                            - NETWORKING
        - Advantages of Dockerizing the App
            - The Size of Image is very less as compare to VM
            - The image can be build using simple Confiuration
            - Versioning of image is very easy
            - We can easily share Images across physical Machines because of the small size as compareb to VM
            - Change Management, Build, Test, Deployent, and Release of application with images is more maintainable and with less cost in the form of time    
            - No OS restriction
                - We can run LInux Image on Windows, as well as on macOS, and vice-sersa 
                - We need only Docker                  
# Docker
    - Open Source Virtualization Software for Microservreices based apps
    - https://www.docker.io

- Creating Node.js app as the Microservices
    - add the 'dockerfile' to the project, to create a docker image of the application, where we copy the required files in the image
        - we need to fetch the OS and Runtime Imgaes to create and run out image form the 'Docker Hub' 
            - https://hub.docker.com
````dockerfile
# Fetch base image
FROM node:18.16-alpine3.17
# Create Work directory on image
WORKDIR /usr/src/app
# copy package.json file to image
COPY package*.json ./
# Run the npm install command in-side image to install dependencies
# installing nodemon in global scope in the image
RUN npm install --global nodemon
RUN npm install --only=production
# Copy app files to image
COPY . .
# Define Port that will be exposed from container where this image will be hosted
EXPOSE 7001
# Run the Application in-side the image
# "strat" is in package.json that executes nodemon
CMD [ "npm","start" ]

````
    - add the '.dockerignore' file to the project
        - this file will define all those files (or their folder) which we do not want to copy in the image 
# Build the Docker Image
- We MUST know docker commands
    - refer https://www.docker.io
        - https://docs.docker.com/engine/reference/commandline/docker/

- The Docker Desktop MUST be installed on the machine
- You MUST have a Docker HUB (repository) account 
    - https://hub.docker.com

- Login 
    - docker login
        - ENter USer NAme and Password
    - docker logout

    - List of images 
        - docker images
    - List all containers
        - docker ps
    - List all Running Containers
        - docker ps -a 
    - Build the Image
        - docker build [PATH-OF-DOCKER-FILE] -t [IMAGE-NAME]:[TAG]
            - [PATH-OF-DOCKER-FILE]: Please run the command on the path where 'dockerfile' exist. In that case the [PATH-OF-DOCKER-FILE] will be '.' 
            - [IMAGE-NAME]: The name of the image as per you choice, must be in lowecase
            - [TAG]: the version number to easily identity, deploy the image
            - e.g.
                - docker build . -t ugamserv:v1        
                - This will load the Dockerfile and will execute all command in the file step by setp
    - Run the image in the container
        - docker run -p [LOCAL-MACHINE-PORT]:[PORT-EXPOSED-BY-CONTAINER] --name [CONTAINER-NAME-IN-WHICH-IMAGE-WILL-RUN] [IMAGE-NAME]:[TAG]                      
            - [PORT-EXPOSED-BY-CONTAINER]: the port mentioned in the dockerfile
            - [LOCAL-MACHINE-PORT]: port used by the local machine to connect with the container so that service running in the container can be accessed
            - [CONTAINER-NAME-IN-WHICH-IMAGE-WILL-RUN]: user defined name in which the image will run. MUST be in lowercase
    - Process of Removing the image
        - If Image is in Use then Stop the Container
            - docker stop [CONTAINER-NAME] | [CONTAINER-ID]
        - Remove the Container
            - docker rm  [CONTAINER-NAME] | [CONTAINER-ID]
        - Remove the image
            - docker rmi [IMAGE-NAME]:[TAG] | [IMAGE-ID]
    - Publishing the image to the repository
        - Docker HUB
        - Azure Container Registry (ACR)
        - Elastic Container Registry (ECR)
        - Google Container Registry (GCR) 

    - Tag the image to the registry name
        - If the registry name on dockect hub is 'myreg' then tag your image as 
            - docker tag [YOUR-IMAGE]:[TAG] myreg/[YOUR-IMAGE]:[TAG]
    - Login o Repository
        - docker login
    - Push the new tagged image to the repository  
        - docker push myreg/[YOUR-IMAGE]:[TAG]
    - TO Pull image on the target machine that is having Docker Desktop
        - docker pull  myreg/[YOUR-IMAGE]:[TAG]              
        - e.g.
            - docker pull mast007/ugamserv1:v1
            - docker run -p 7001:7001 --name mycont mast007/ugamserv1:v1
- Keep running image in background
    -  docker run -d -p [LOCAL-MACHINE-PORT]:[PORT-EXPOSED-BY-CONTAINER] --name [CONTAINER-NAME-IN-WHICH-IMAGE-WILL-RUN] [IMAGE-NAME]:[TAG]             
