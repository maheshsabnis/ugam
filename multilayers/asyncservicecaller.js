var asyncServiceCaller=function(){
   var serviceObject = new asyncService();
 /* Actual Async HTTP call is Encapsulated */
    this.allData = async function(){
        var records = await serviceObject.loadData();
        console.log(`All Data = ${JSON.stringify(records)}`);
        return records;
    }
}