var service = function(){
    var url = "https://catprdapi.azurewebsites.net/api/Product";
    this.loadDataSync=function(){
        console.log('2. ENtered in Method');
        var records=[];
        /* Sync Execution because async:false*/
        $.ajax({
            url:url,
            method:"GET",
            async: false
        }).done(function(resp){
            records = resp;
            console.log(`3.a. In Service records = ${JSON.stringify(resp)}`);        }).fail(function(err){
            console.log(`3.b. Error Occurred ${err}`);
        });

        /* Return Before the execuytion of done() */
        console.log('4. Near to Return');
/* Some Heavy Logic */
        
        return records;
    };


    this.loadData=function(){
        console.log('2. ENtered in Method');
        /* Returning the Async State Object (Promise) to caller 
        The caller has to subscribge to it
         */
        var xhr = $.ajax({
            url:url,
            method:"GET"
        }); 

        return xhr;
    };
    this.loadDataById=function(id){
        var xhr = $.ajax({
            url:`${url}/${id}`,
            method:"GET"
        }); 

        return xhr;
    };
    this.saveData=function(data){
         var xhr = $.ajax({
            url:url,
            method:"POST",
            data:JSON.stringify(data),
            contentType:'application/json'
         });
         return xhr;
    };
    this.updateData=function(id,data){
        var xhr = $.ajax({
            url:`${url}/${id}`,
            method:"PUT",
            data:JSON.stringify(data),
            contentType:'application/json'
         });
         return xhr;
    };
    this.deleteData=function(id){
        var xhr = $.ajax({
            url:`${url}/${id}`,
            method:"DELETE",
            contentType:'application/json'
         });
         return xhr;
    };
};