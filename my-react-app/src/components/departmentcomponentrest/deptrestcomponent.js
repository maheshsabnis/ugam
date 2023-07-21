import React, { useEffect, useState } from 'react'
import TableComponent from '../reusablecomponents/tablecomponent';

import { DepartmentSevice } from '../../services/departmentservice';

/* SERN */
/* SQL Server Express React Node (SERN) */

const DepartmentRESTCompoent = () => {
  const [dept,setDept] = useState  ({DeptNo:0,DeptName:'',Location:'',Capacity:0});

  const [depts,setDepts] = useState([]);

  const [message,setMessage] = useState('');

  /* Service instance */

  let serv = new DepartmentSevice();

  const locations = ['Pune', 'Mumbai', 'Chennai', 'Benguluru'];


  /* use useEffect() to get data from REST APIs */

  useEffect(()=>{
     serv.getData().then((response)=>{
        console.log(JSON.stringify(response.data.data));
         setDepts(response.data.data);   
         setMessage('Data read is successful');
     }).catch((error)=>{
        setMessage(`Data read failed ${error}`);
     });
  },[]); /* Dependency parameter to inform that the state is change and now it can stop */


  const clear=()=>{
    setDept({DeptNo:0,DeptName:'',Location:'',Capacity:0});
  }

  const add=()=>{
     serv.postData(dept).then((response)=>{
       
     }).catch((error)=>{
        setMessage(`Data read failed ${error}`);
     });
  };


  return (
    <div className='container'>
        <h3>Call to REST</h3>
        <div className='form-control'>
            <label>Dept No:</label>
            <input className='form-control'
             value={dept.DeptNo}
              onChange={(evt)=> setDept({...dept, DeptNo:parseInt(evt.target.value)})}/>
        </div>
        <div className='form-control'>
            <label>Dept Name:</label>
            <input className='form-control' value={dept.DeptName}
             onChange={(evt)=> setDept({...dept, DeptName:evt.target.value})}
            />
        </div>
        <div className='form-control'>
            <label>Location:</label>
            <select className='form-control' value={dept.Location}
             onChange={(evt)=> setDept({...dept, Location:evt.target.value})}
            >
                {/* Generate Opetion Dynamically */}
                 <option>Select Location</option>
                {
                    locations.map((l,idx)=>(
                        <option key={idx} value={l}>{l}</option>
                    ))
                }
            </select>
        </div>
        <div className='form-control'>
            <label>Capacity:</label>
            <input className='form-control' value={dept.Capacity}
             onChange={(evt)=> setDept({...dept, Capacity:parseInt(evt.target.value)})}
            />
        </div>
        <div className="btn-group-lg">
            <button className='btn btn-primary' onClick={clear}>Clear</button>
            <button className='btn btn-success' onClick={add}>Add</button>
            <button className='btn btn-warning'>Update</button>
            <button className='btn btn-danger'>Delete</button>
        </div>
        <br/>
        <div className='container'>
            <strong>
                {message}
            </strong>
        </div>
        <hr/>
        {/* the selectedRow() function is bound to the 'setDept' function
         so that the 'row' parameter of the selectedRow() function will be 
         directly passed to the setDept() function 
        */} 

        <TableComponent selectedRow={(row)=>setDept(row)} dataSource={depts}></TableComponent>
        {/* <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    {
                        Object.keys(dept).map((header,idx)=>(
                            <th key={idx}>{header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
              {
                depts.map((d,index)=>(
                    <tr key={index}>
                        {
                           Object.keys(dept).map((header,idx)=>(
                                <td key={idx}>{d[header]}</td>
                        )) 
                        }
                    </tr>
                ))
              }
            </tbody>        
        </table> */}
    </div>
  )
}

export default DepartmentRESTCompoent;
