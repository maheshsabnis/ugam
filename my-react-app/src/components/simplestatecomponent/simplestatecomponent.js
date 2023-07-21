import React, {useState} from 'react';

const SimpleStateComponent=()=>{
   /* Define a Local State for the Component */
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [result, setResult] = useState(0);

    const add = ()=>{
        setResult(x+y);
    };

    const clear=()=>{
        setX(0);
        setY(0);
        setResult(0);
    }



    return (
        <div className='container'>
            <div className='form-group'>
                <label>Enter X:</label>
                <input className='form-control' value={x}
                 onChange={(evt)=> setX(parseInt(evt.target.value))}/>
            </div>
            <div className='form-group'>
                <label>Enter Y:</label>
                <input className='form-control' value={y}
                onChange={(evt)=> setY(parseInt(evt.target.value))}/>
            </div>
            <div className='form-group'>
                <label>Result:</label>
                <input className='form-control' value={result} readOnly/>
            </div>
            <div className='btn-group-lg'>
                <button className='btn btn-warning' onClick={clear}>Clear</button>
                <button className='btn btn-success' onClick={add}>Add</button>
            </div>
        </div>
    );
};

export default SimpleStateComponent;