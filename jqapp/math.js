/* A Close Function  a JS Function that return public members inside the return block as a JSON object. Whatevent is not inside the return block is private */

function Mathematics() {
    return {
        add: function(a,b){
            return a + b;
        },
        substract:function(a,b){
            return a - b;
        },
        multiply:function(a,b){
            if(a === 0 || b === 0)
                return 0;
                
            return a * b;    
        },
        divide:function(a,b){
            try {
               if(b === 0 || a === 0)
                    /* Throw Error */
                    throw new Error('Numerator or Denominator cannot be zero');
               return a / b;     
            }catch(e){
                /* Return error */
               return e.message;     
            }
        }
    };
}

