/* Array nof JSON Object */
var employees = [
    {EmpNo:101,EmpName:'Mahesh'},
    {EmpNo:102,EmpName:'Mukesh'},
    {EmpNo:103,EmpName:'Mohan'},
    {EmpNo:104,EmpName:'Manish'}
];

/* Reading Schema of Record in array */
var obj = employees[0];

console.log(obj);

/* Read only the schema */

var properties = Object.keys(obj);

console.log(properties);
