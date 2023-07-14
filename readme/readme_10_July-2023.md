# JavaScript
- Cross-Browser JS
    - Object Model common for All Browsers
        - Data Structure
            - Array
            - Strings
        - Eventing
            - Kyboard, Mouse, DOM Elements'
        - UI Object Model (HTML 5)
            - The 'data-' attribute for HTML Elements
            - Reduced JS Object model for HTML DOM Manipulation 
        - Asynchronous JS Programming
            - Modular Approach of App Development
            - Reusable JS Object Model
            - Asynchronous JavaScript and XML (AJAX)    

- JavaScript Libraries
    - Based on Single Responsibiity Prinscipal (SRP)
        - Targetes to a specific requirements of JS use in Web Apps             
        - Works within Boundries
        - FOr a Complex Web App we may use various JS Libraries
            - e.g. Seperate libs for DOM, UI, Server Calls, Security, etc.
        - THis may increase Maintanance Cost
        - Developres MUST learn all dependant JS libs
        - Developers MUST use them carefully by managing dependencies aross JS libs in app
        - Multiple JS libs may have performance impact on Browser 
- JavaScrtipt Framework
    - Design for E2E support for Web Apps
    - Address most of needs for Web App dev
        - UI Generation
        - Data Manipulations
        - Modularity
        - Less dependency on external or third part JS
        - Inbuilt support for Performance, Testing, Security etc.                  
        - Inbuild Server-Call Management with ASYNC Programming
    - Sometimes over use of features on Web App whern they are not necessary may cosrt performance and maninatnability  

# jQuery 
    - Widely used MOST popular JS Library for Front-End App Development
- The '$' symbol that represents jQuery Object Model
    - Uses CSS 3 Selectoros to query HTML DOM
        - The 'id' selector, uses '#'
````html
    <input type="text" id="txt"/>
````

````javascript
    $("#txt")
````

        - The 'class' selector, uses '.'. Returns a collection of HTML elements applied with the class
````html
<input type="text" id="txt1" class="c1"/>
<input type="text" id="txt2" class="c1"/>
<input type="text" id="txt3" class="c1"/>
````
````javascript
    $(".c1")
````

        - The 'tag' selector, uses the 'tag-name'.  Returns a collection of HTML elements 

````html
<input type="text" id="txt1" />
<input type="text" id="txt2" />
<input type="text" id="txt3" />
````
````javascript
    $("input")
````

````javascript
    $('input[type="text"]'); /* All input text elements  */

      $('input.c1'); /* All input  elements having class as c1  */
````

- plugins and methods
    - The 'on()'
        - used to subscribe an event on HTML Elements
        - click(), dbclick(), change()
````javascript
    $("#btn").on('click', function(){.....});
````
    - The 'off()'
        - used to unsubscribe an event from HTML element    
    - The 'val()'
        - Read/Write values
    - The 'html()'
        - Read HTML as well as add html
    - The 'append()'
        - dynamically add HTML element
    - The 'css()', 'addclass()'           

- plugins
    - Add-on feature for improving power of jQuery
    - All pluings are prefixed with '$.'
    - e.g.
        - '$.each()'
            - looping  aka iteration
    
        - '$.ajax()'
            - USed to perform Asynchronous operations to the server
                - With jQuery 2.x+ onwards, this is dependning on 'JAVASCRIPT PROMISES'          
            - The 'AJAX' by Mozilla Foundation
                - XmlHttpRequest object
            - The 'Ajax' by Microsoft  
                - XmlHttpRequest      

# Rules of Using JS wisely in browser
    - Always check for invalid data before processing it
    - Alway implement Error Handling (aka Exception Handling) so that while processing data if any error occured it will not crash the page

# Developing Front-End Application using jQuery
    - Managing UI aka Presentation Layer
        - Manipulate DOM Elements
            - CSS 3 Selectors
            - Events
            - jQuery Methods
        - Generate DOM Elements
            - Handle this based on Data Manipulation
        - Data Handling in DOM Elements
            - Selectors
            - Filters
    - Handling Data Manipulation
        - Arrays
            - Methods for Array Manipulation
        - Strings
            - String Methods
        - Objects
            - JSON Objects
    - Managing Server Calls
        - Ajax    
