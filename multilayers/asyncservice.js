var asyncService = function(){
    var url = "https://catprdapi.azurewebsites.net/api/Product";

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
}