/* Reference Functions 
 functions body of which address is stored in a signle Object
 this acts as a class where all declararations those are prefixed with 'this.' are accessible as public using an instance of the object

 THis is also known as an Anonymous Functions definition
*/
/* Global to the HTML page which is loaded in Browser */
var arr1 =['A', 'B', 'C'];

var myobject = function(){
    /* Private Declaration */
    // This array will be scoped to the curent fucntion
    var arr = [10,20,30];

    this.power = function(x,y){
        return Math.pow(x,y);
    };

    this.addValue = function(val){
        arr.push(val);
    }

    this.getValues  =function(){
        return arr;
    }

    function display(){
        console.log('I am Private');
    }

};


var uiGenerator = function(){

    this.select = function(values){
        if(values.length === 0 || values === undefined)
            return `<div>
               No Data No UI
            </div>`;
        
            /* Iterate over the value */
            var select = `<select class="form-select">`
            for(var i=0; i<values.length;i++){
                select += `<option value="${values[i]}">${values[i]}</option>`
            } 
            select+= `</select>`;
            console.log(select);
            return select;
    };

};  