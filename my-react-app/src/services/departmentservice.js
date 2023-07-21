import axios from 'axios';

export class DepartmentSevice {
    constructor(){
        this.url = 'http://localhost:7001/api/depts';
    }

    getData(){
        let response = axios.get(this.url);
        return response;
    }
    postData(dept){
        let response = axios.post(this.url, dept, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    putData(id,dept){
        let response = axios.put(`${this.url}/${id}`, dept, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    deleteData(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }

}
