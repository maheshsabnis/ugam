/* Array nof JSON Object */
var employees = [
    {EmpNo:101,EmpName:'Mahesh', DeptName: 'D1', Designation:'Manager'},
    {EmpNo:102,EmpName:'Mukesh', DeptName: 'D2', Designation:'Lead'},
    {EmpNo:103,EmpName:'Mohan', DeptName: 'D3', Designation:'Engineer'},
    {EmpNo:104,EmpName:'Manish', DeptName: 'D4', Designation:'DevOps'}
];

/* Reading Schema of Record in array */
var obj = employees[0];

console.log(obj);

/* Read only the schema */

var properties = Object.keys(obj);
/* The following expression will show the 0th property value of 0th record in employees array */
console.log(employees[0][properties[0]]);

console.log(properties);

function generateTable() {
    /* the table definition */

    var table = `<table class="table table-bordered table-striped">`;
    /* Defining Headrers */
    table+=`<thead><tr>`;
    properties.forEach((header,index)=>{
        table+=`<th>${header}</th>`;
    });
    table+=`</tr></thead>`;

    /* Add Body */
    table+=`<tbody>`;
    /* row generation  for the table  */
    employees.forEach((emp,idx)=>{
        table+=`<tr>`;
            /* Read value for each property of each row */
            properties.forEach((header,index)=>{
                /* Reading value of each property of each emp record in employees array */
                table+=`<td>${emp[header]}</td>`;
            });
            table+=`<td>
               <button>Edit</button>
            </td>`
        table+=`</tr>`;
    });

    table+=`</tbody>`;

    table+=`</table>`;
    return table;
}

