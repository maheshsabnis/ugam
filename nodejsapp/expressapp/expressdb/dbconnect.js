/// Write a method to conect to database taht returns boolean
import sql from 'mssql';
class DbConnect {
    async connectToDb(){
        try {
            const connection = await sql.connect('Server=127.0.0.1;Database=UCompany;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCeritificate=true');
            return connection.connected;
        }catch(ex){
            return false;
        }
    }
}

export default DbConnect;
