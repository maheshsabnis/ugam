var names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Sabnis"];

/* Print all values */

for (let index = 0; index < names.length; index++) {
    console.log( names[index]);
    
}
console.log();
names.sort();

for (let index = 0; index < names.length; index++) {
    console.log( names[index]);    
}
console.log();
names.reverse();


for (let index = 0; index < names.length; index++) {
    console.log( names[index]);    
}

/* Search an element in Array */

/* If found then return the index of the element in array else -1 */

console.log(`${names.indexOf('Tejas')} and ${names.indexOf('tejas')}`);
/* Append */
names.push('Gundaram');
for (let index = 0; index < names.length; index++) {
    console.log( names[index]);    
}

/* Remove Element from top*/
names.pop(); 
for (let index = 0; index < names.length; index++) {
    console.log( names[index]);    
}

/* Shift from the first element */

console.log(`Removed from first position ${names.shift()}`)
for (let index = 0; index < names.length; index++) {
    console.log( names[index]);    
}
/* Add element at the First position */

names.unshift('Tejas');
for (let index = 0; index < names.length; index++) {
    console.log( names[index]);    
}


var ar1 = [10,20];
var ar2 = [30,40]

var ar = ar1.concat(ar2);

console.log(ar);