let products = [
    {ProductNo:11, ProductName: 'A1', Manufacturer: 'D1'},
    {ProductNo:12, ProductName: 'B2', Manufacturer: 'D2'},
    {ProductNo:13, ProductName: 'C3', Manufacturer: 'D3'},
    {ProductNo:14, ProductName: 'D4', Manufacturer: 'D1'},
    {ProductNo:15, ProductName: 'E5', Manufacturer: 'D2'},
    {ProductNo:16, ProductName: 'F6', Manufacturer: 'D3'},
    {ProductNo:17, ProductName: 'G7', Manufacturer: 'D1'},
    {ProductNo:18, ProductName: 'H8', Manufacturer: 'D2'},
    {ProductNo:19, ProductName: 'I9', Manufacturer: 'D3'},
];

class DataAccess {
    getProducts(req,resp){
        return resp.status(200).send({
            message: 'Products Data',
            data: products
        });
    }
    saveProduct(req,resp){
        // read body
        const prd = req.body;
        products.push(prd);
        return resp.status(200).send({
            message: 'Products with added Data',
            data: products
        });
    }
}

// Export the DataAccess class a Custom Node.js module
// SO that it can be imported in otehr Node.js module
export default DataAccess;