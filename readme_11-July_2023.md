# Isomorphic Apps
- Same code-base shared across layers of application
    - Share Data or Data Structure using 'Arrays'
    - Map, Like Dictionary to stire data in Key:Value pair
        - WeakMap
    - Set, Liek Hash / HashSet store unique values in collection
        - WeakSet     

# Programming with jQuery
    - filters
        - Processing the UI using jQuery based on the appearnace of the UI Element in HTML DOM
        - The 'first()', 'last()', 'eq()', 'not()', etc.
    - UI Effect Methods
        - Applying CSS dynamically on UI element
        - The 'filter()' method
            - THis method is used to query to DOM elements based on the matched data present in it
            - This uses the 'toggle()' method to dynamically modify the DOM based on the 'filter()' method 
    - Adding Events to dynamically generated HTML UI Element
        - Make sure that the dynamic UI element MUST be present in a parent that isn available when the DOM is generated
        - This will make sureb that the jQuery will be abale to traverse it for attaching events
        - Then traverse to this parent event and then attach event
        - IN the following example the 'div' with 'id' as 'dv' is already present in DOM 
````javascript
   $("#dv").on('click', DYNAMIC_ELEMENT, function(){....});     
````
    - Think of filtering data from UI based on Events aka the UX effect on HTMl Page        

# jQuery Asychronous JavaScript and XML (Ajax)
- Async Operations without Promise.
    - XmlHttpRequest object, provided by the Mozilla
        - onLoad() event method
        - onError() event method
            - The onLoad() and onError() subscription code is mandatory before calling following methods

        - open()
            - Initiate calls to the Web Srevice or REST APIs
        - setRequestHeaders()
            - Necessary to add HTTP Headers so that the Service can execute accordingly 
        - send()
            - Used to Make the outgoing Request  
- Promise
    - An Object introduced in ES 7 for managing Async calls (aka NO-BLOCK calls) from JavaScript app loaded in browser
    - This works on the concept of 'Acknowledgement'
    - Promise()
        .then(SUCCESS).catch(FAILED);
    - Promise().then().then().then().......catch();
        - Performing Sequential Async calls
    - Promise.all([ARRAY-OF-PROMISE-OBJECTS])
        - Performing Parallel calls        
- AJAX with jQuery
    - $.ajax()
        - Plug-in
        - Http Methods
            - GET: Read data from server
            - POST: Create new entry on Server
            - PUT: Update an exisiting entry from server
            - DELETE: Delete an existingn entry from server 
        - MIME TYpes
            - application/json for JSON data
            - application/xml for XML
            - text/xml for XML
            - text/html for HTML
            - octet-form / multi-part-form
                - For Files Upload 
````javascript
    $.ajax({
        url: URL-OF-SERVICE,
        method: 'GET/POST/PUT/DELETE',
        data: JSON data to be posted / updated to server,
        contentType: the MIME Type,
        dataType: 'json/xml/html/jsonp', /* jsonp for CORS */
        corssDomain: true /* for CORS */
        async: true (default) | false /*(for synchronous calls this will block the client, so not recommended)*/
        headers:{
            /* HEADER Information */
            AUTHORIZATION: `basis username:password` 
                    OR
            AUTHORIZATION: `token JSON-WEB-TOKEN`,
            
            Accept-Control-Allow-Origin: "*" /* for CORS*/
        }
    }).done(SUCCESS-CALLBACK).fail(ERROR-CALLBACK).
    completed();
````
- SUCCESS-CALLBACK: The callback function that will be executed when the service return success
- ERROR-CALLBACK: The callback function that will be executed when service has error response 
