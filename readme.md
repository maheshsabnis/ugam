# HTML
- Modern Elements System
    - HTML 5 = HTML tags + Inline JavaScript + Inline CSS
- UI Requirements
    - Layout, e.g. table, div
        - use 'article' for self-contaiuned contents 
            - Offer the default layout to render the contents
            - They have own settings for to distribute contents contained inside it
            - Use for
                - News
                - Blogs
                - Forums   
        - use 'paragraph' to auto arrange contents
        - Use the Look and feel features properly so that End-User can feel comfortable while interacting
            - CSS
                - JS Object model used to present the HTML Elements System in interactive fashion based on following measures
                    - Alignment
                        - W.r.t. the perent the position of Element
                    - Back Color
                    - Fore Color
                    - Dimensions
                        - Height, Width, Angle, etc.
                    - Margins
                        - W.r.t. the parent the top-left of the element
                - CSS Object Model has the followig systax
                    - .[CLASS-NAME] {
                        [STYLE-NAME]:[VALUE-FOR-STYLE]
                    }        
                    - The '.' is the style class prefix
                    - The 'CLASS-NAME', the CSS style group name which will be applied on HTML Element to changen is look and feel
                    - The 'STYLE-NAME', the actual property that will be set on HTML elementy for its look and feel
                        - e.g. margin, height, width, etc
                    - The 'VALUE-FOR-STYLE' the value that will be assigned to HTML element
                - Styles + JavaScript
                    - RICH UI and Dynamic User Experience (UX)        
        - Each HTML element has an 'Attribute-System'
            - A Mechanism to handle the look and feel and behavior of HTML Element
            - Property-Attributes
                - USed to Read/Write values 
                    - e.g. value, changed, etc.
                - USed to apply styles
                    - The 'class'
                    - The 'style', to defie inline CSS to HTMl Element (Possibly Avoid this)
                - Used to Access HTML Element using JavaScript           
                    - The 'id', 'name'
            - Event Attributes
                - USed to define a behavior of HTML elements based on Event
                    - click, change, blur, mousemove, etc.            
# CSS Practices
1. Use Selectors Wisely
    - Selectors
        - JSOM mechasim to extract HTML element from DOM to apply the Style on it     
        - How to extract HTML element from DOM? 
            - The 'id'
                - A single HTML Element will be extracted
            - The 'class'  
                - A group of HTML elements, HtmlElementCollection object (an Array of HTML Element)    
            - The 'tag'
                - The HTML element based on tag e.g. input, div, table, etc.
                - A group of HTML elements of specific tag
        - Combinational Selectors, introduced in CSS 3  
            - tag[type] selector
                -  matching tag but with specific type
                - e.g.
````html                
    <input type="button" value="click"/>
````                    
````css
     input[type="button"]{}
````
            - tag[.class] selector
                - match tag but with specific class attribute value         
````html                
    <input type="button" value="click" class="b2"/>
````                    
````css
     input.b2{}
````                      

