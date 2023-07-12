# Date : 04-July-2023

1. Create HTML page with 5 text elements and 4 buttons, create CSS class that will change background colors of Text elements and button elements as Yellow and Blue respectively
2. Create a  Paragraph in HTML and make the text contents of the paragraph as bold, italic using CSS
3. Create HTMl Table with Border as double and make all cells as red color

# Date : 05-July-2023
1. Create a Grid with 4 columns and 5 Rows using 'CSS 3 grid class'
2. When Mouse is entered on a content in Grid change the height and width of the content
3. Create a Div and  Create a table in div with 6 rows and 5 columns. Show data in this table as per your choice
4. When a mouse is hover over the row the row must have following behavior
    - chenge font-size, font-color, font-name of contents for that row as well as chnage the back-color of the row to yellow
    - when the page is loaded in browser all even rows of the table will have magenta back-color and all odd rows will have background as cyan color
    - When a mouse is hover over the row show the tooltip that will show the message as "the current row is selected"
    - (optional): If the height and width of the page is resized and if the width of the table is more than the resized width of the div then show the horizontal scross bar
5. Create a flexbox that shows multiple div where each div contains text in it. Write CSS Styles to show the First Character of each content text as Bold with height as 30 px     


# Date: 06-July-2023
1. Using Bootsrap Create a Form with following requirements
    - The Name Input Element MUST be grouped with dropdown (select) where end-user can select values like Mr., Mrs., Miss.
    - The Salary Input elemnt MUst be Grouped with Rupees Symbol
    - The Email Input eleent MUST be grouped with as follows
        - [INPUT-ELEMENT-FOR-EMAIL-NAME]@[INPUT-ELEMENT-FORM-PROVIDER].[DROPDOWN-FOR-COM/EDU/ORG/CO.IN]
2. Create a Navigation Menus for E-Commerce Product Selection like amazon.in            


# Date: 07-July-2023

1. Use media query to perform the following task with the HTML page
    - If the Size of the screen is more than 400px then show all buttons with default shape with background color of each button as yellow and foreground color as red
    - If the Size of the screen is less than 400px then change the button as elliptical buttons (use bootstrap button classes) and change the background color as grey and foreground color as blue

2. Create a mixin that will be used to define table styles for each page as follows
    - table-danger
    - table-striped
    - table
    - table-responsive
    - the teble cell must be having color style as red 


# Date: 10-July-2023
1.	Create a JavaScript Close type function that returns public function for performing Math Operations like Power, Squareroot, fibonacci 
2. Create a Calculator as like we see on Windows OS with same UI and functionality and CSS


# Date: 11-July-2023
1. Generate Table Dynamically based on JSON Array of Products with the following keys for each product
    - ProductId, ProductName, CategoryName, Description, Manufacturer, Price
2. Each row of the Table MUST be having the 'Select' button dynamically generated. When the Select Button is clicked, show the contents of the Row in Alert

3. Above the Table add a Text Element to search records from table based on the value enetered in it

4. (Mandatory)
- Above the table generate a Radio-Button-List (radio input element having same value for 'name' attribue). This list will be generated based on the Properties of the record in Products array
    - ProductId, ProductName, CategoryName, Description, Manufacturer, Price
- Select any one of the radio button and then based on the value entered in the input element filter data from the table 
    - e.g. if the radio button selected is 'ProductName' then the input element will be entered teh value of the productname and table data will be filtered based on the productname only      
 


 # Date:12-July-2023
 1.  Crear product.html and perform GET and POST Operations with product API
    - https://catprdapi.azurewebsites.net/api/Product
 2. Enhance the Asignment No of of 11-July-2023, where wnen  the Select button is clicked, the Row Details for Category / Product MUST be loaded in the Input elements and then the End-User can update its details. But to save this details Use the same 'Save' button. The seperate Update button is not needed. The same 'Save' button will be used for Update and New record creation
 3. Modify the generateTable()  table method as follows
 
 ````javascript
    function generateTable(dataSource, canDelete){
        .....
    }
 ````   
 - if the 'canDelete' is true then each row will have a 'Delete' button. When this button is clicked , delete the record by making AJAX call
 