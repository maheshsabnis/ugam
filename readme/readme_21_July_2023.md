# Industry Standard UI/UX Guidelines
- Browser Compatibility
- Rapid UI Updates based on Events and Data Changes
- Reusable UI
    - WebComponents
        - Autonoumous Object that has following
            - UI
            - Data
            - Behavior (methods)
            - Events
        - JSOM
            - Enhanced for Regisetring the WebComponent in Browser using following
                - customElement
                    - An Object that is used to Load the WebComponent on Browser
                - customElementRegistry
                    - A Method tht is used to register the WebComponent in Browser's runtime to Execute it with its UI, Data, and Behavior (along with Events)           
# Libraries and Frameworks involved in WebComponents
    - Angular
        - Google and the we have Angular Community
    - React
        - By facebook and React Dev Team
    - Vue            
        - Even You
    - Ember
    - Extjs    
# JS Frameworks
    - E2E Support for Front-End
        - UI, Data Management, HTTP Calls, Security, Routing, etc.
        - Angular
        - Ember
        - Extjs
    - An Ioslated Front-End that has Forn-End Domain Logic, Data Management (Procesxing), Dynamic View Generation and Navigation, then always go for Framework
        - The Only Server-Side Dependency to fetch data and security validation from Server-Side using HTTP Calls       
    - Advantages
        - No unnecessary external dependency, third-party libraries are used only when they are really needed for UI
            - e.g. If Charts are to be created then use d3.js, dimple.js, etc.     
    - Limitations
        - Although the app is not using all features of the Framework still it is loaded in browser and hence increase the Build size        
# JS Libraries
    - Only a spcific Solution for UI Loaded in Browser
    - Libreries always executes with its boundaries
    - React, Library for UI / View
    - jQuery, DOM
    - Moment.js, DateTime Operations
    - Knockout.js, MVVM Library
    - .... and many more         

    - Used when the App needs to have only RICH UI and Responsiveness, and rest all are fetched from the server 

    - Advantages
        - Small Build Size
        - Fast for the browser 
    - Limitations
        - There exists mandatory third party dependencies
            - e.g.
                - For Http call uses 'axios'
                - Security use third-party libs

# React.js
    - Proven JS Library by Facebook
    - Using a very simple JS Object Model for Component Creation                       
    - Developer has complete Control on UI
    - Why?
        - Its a Lightweight, high performance JavaScript Library for Building UI for Modern Web Fron-End Apps 
# React.js Object Model
    - Component (Based on WebComponent)
        - UI + Data + Events + Methods
        - Autonomous
    - Class Components
        - An older standard before React 16.8
        - Now industry does not use it
    - Fucntional Components
        - A Sime JS Function, that returns HTML and has data for HTML Generation and Events to execute methods those contains Logic for the Component          
    - Packages aka libraries
        - react and react-dom    
    - The 'react'
        - defines 'Component' and all of its object model
    - The 'react-dom'
        - Manages the 'MOUNTING' and 'RENDERING' fo Component in Browser's DOM
        - 'MOUNTING'
            - A Process of registring the React Compoennt as Custom Element for Browser, so that its can be loaded in Browser's JSOM
        - 'RENDERING'
            - A process of showing UI of the component in Browser when the app is loaded
            - The UI can be changed based on Events and hence the redering of only that part of the component MUST be  changed in Browser
            - Since only that part of the component is updated (re-rendered) it does not need to refresh the whole page (DOM loaded in browser), this is the reason for 'UI RESPONSIVENESS'     




````javascript
function MyComponent(){
    return (
        <div>
            <button>HI</button>
        </div>
    );
}

// OR

const  MyComponent=()=>{
    return (
            <div>
                <button>HI</button>
            </div>
        );
}

// OR

const MyComponent=()=>(
    <div>
        <button>HI</button>
    </div>
);
````

- Components are reusable, there exist parent-child relationship across components, and parent can pass data to child using 'props' object and child can also emit data to parent using the same 'props' object
    - The 'props' is an immutable object that live throught life on the React app in browser

````javascript
const  MyComponent=()=>{
    return (
            <div>
                <button>HI</button>
                <MyChildComponent message={'Hello-Child'}/>
            </div>
        );
}
/* the message will be a dynamically declared property by React */
const  MyChildComponent=(props)=>{
    /* Local Method to the component */

    const display=()=>{
        /* Some Logic */
    }

    return (
            <div>
                {/* Event Binding to the Methods */}
                <button onClick={display}>HI</button>
                {/* Property Binding */}
                {props.message} 
                <input value={}/>  {/* MUST close the tag all standard attributes are case-sensitive */}
            </div>
        );
}
````
- JavaScript Xml Extension Parset aka JSX
    - This contains following
        - All HTML Elements are standard JS JSX elemensts and they are 'compiled'
            - They are case sensitive
            - Each Start-Tag MUST have End-tag, else the compilation will fail 
        - JSX is responsible to compile following
            - HTML Elements
            - All Bindings of Data and Methods to HTML Elements with its attributes (e.g. value) and Events (e.g. onClick)    
- The Component has its own 'state', the data only limitted for that component. This is 'mutable' object
    - The state is declared using 'useState()' hook
    - The state can be changed based on Events

# React Hooks
- Introduced in React 16.8

- React's standard functions, those are used by React Compoennt for performing following
    - State Definition
        - useState()
````javascript
    const [x,SetX] = useState(0);
    /* x is a state property for the component */
    /* setX an action that will be used to update value of x based on an event */
    /* 0 is an intial value of x */
````
    - Sharing Data Across Components
        - useContext()
    - Performing High-Intensive Resouce utilization operation aks async oeprations
        - useEffect()
````javascript
       useEffect(()=>{
        /* perform resource intensive operation*/
       },[]); /* an emtoy array means the state is change and useEffect() can stop */
````
    - Callback Execution
        - useCallback()
    - Memoization
        - useMemo()
    - State Definition so that its can updated in stages  
        - useReducer()


# Benefits of React
    - Fast
    - Has its own compiler
    - Limited objects that makles the app loightweight
    - Easy Error Management jsut like JavaScript exception handling
# Boundaries of React
    - Does not have its own object for HTTP calls instead is release of 'fetct()' an ES 6 object or the 'axios' library
    - No default routing is available, instead we need to use the 'react-router-dom'

# Micro-FrontEnds
    - A Single App can be divided across Multiple Teams. Each team can design Components and then they can be loaded in a signle browser    
    - Multiple React Applciations can be loaded in Browser 
    - In Modern Micro-FrontEnd Apps we can have hetrogenous JS Object models loaded in Browset as a part of Single Application
        - Angular + React + Vue

# Creating React App
- npm install --global create-react-app

- create-react-app [APP-NAME]
    - index.js
        - Uses ReactDOM to redner the Component
    - App.js
        - Contains the component    