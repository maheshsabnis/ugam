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
 

 # Date: 13-July-2023
 1. Create a Page e.g. Records.htmlwith following Specifications
    - This page will have 2 Tables one each for showing Categories and Products
    - When an end-use clicks on the Row of the Category Table, the Products Table will show all products for the selected category (NO REST API is present for Parent Child filters, do this using JavaScript Array methods)

    - in Header of each column of the table (Category and Product both), show to buttons 'sort' and 'reverse'
        - When the sort is clicked, sort data of the table based on the COlumn of which the sort button is clicked 
        - Similar do revers for reverse button click
        - Use the bootstrap btn class for Sort and reverse icons
        - Do this using sort() and reverse() methods of JavaScript     

2. Modify the logic for Category as Well as Product Create operation based on following rules
    - (NOTE:) Do not use HTML validations e.g. required, pattern, etc, Write JavaScript Code
    - If the CategoryName is already present then show an error message next to the CategorName input  element in Read COlor
    - If the ProductId is already present then show an error message next to the ProductId input  element  in Red Color
    - Make sure that following validation rules are implemented
        - If the BasePrice for Category and Price for Product is -ve then shoew error message next to the input element of price and baseprice
        - The Price MUST be numeric 
    - FOr Product following entries are mandatory
        - ProductName
        - Manufacturer
        - Description
    - For Category following entries are mandatory
        - CategoryName
    - Show error messages next to each input element. Disable the 'Save' button as well as 'Update' button if the page has invalid values
    - In Product.html page show list of Categories in the 'Select' element or may be using radiobutton list instead of having input element for entring CategoryId                    



# Date: 14-July-2023

1. Complete the REST API by modifying the api.js file based on following requirements
    - complete the PUT and DELETE methods
    - Modify the GET request for searching Employees based on following values received from the header
        - EmpName='A'
        - DeptName = 'D1'


# Day: 17-July-2023

1. (Mandatory) Write a Node.js application that will read the data from files presents in a Directory and all of its sub diorectories

2. (optional) Use .ajax() to post image to the server

3. (Mandatory) Modify the server.js to have APIs implemented to perform Get and POST operations from the home.html


# Day: 18-July-2023

1. Complete CRUD Operarions for Employees

````sql
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[DeptNo] [int] NOT NULL,
	[DeptName] [varchar](200) NOT NULL,
	[Location] [varchar](100) NOT NULL,
	[Capacity] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Department] ADD PRIMARY KEY CLUSTERED 
(
	[DeptNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmpNo] [int] NOT NULL,
	[EmpName] [varchar](400) NOT NULL,
	[Designation] [varchar](100) NOT NULL,
	[Salary] [int] NOT NULL,
	[DeptNo] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Employee] ADD PRIMARY KEY CLUSTERED 
(
	[EmpNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Employee]  WITH CHECK ADD FOREIGN KEY([DeptNo])
REFERENCES [dbo].[Department] ([DeptNo])
GO

````

2. Create a REST API, thet will have a 'HTTP GET' method, this method will accept parametere as follows
    - http://server:PORT/api/search/:take/:skip
    - take: number of records to be shown in HTML Table
    - skip: the numbers of records to be skpipped from the top 
3. The valeus from take and skip must be selected by end-user from HTML View, 
    - May be input elements to enter data for take and skip or HTML Select
5. The botteom of the table where data is shown MUST show bootstrap pahgination in numbers 
    - If total records on serever are 100 and then each page size is 10 then table will have 10 rows and the pagination numbers will be 10
    - Note : show 1 number more in pagination e.g. is pages are 10 but the number of records are 104, then the pagination numbers will be 11      


