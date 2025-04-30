import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import {useNavigate} from 'react-router-dom';

const EmployeeCompnent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate()

    function saveEmployee(e){
        e.preventDefault()

        const employee = {firstName, lastName,email}
        console.log(employee)

        createEmployee(employee).then((response) =>{
            console.log(response.data)
            navigator('/employees')
        }) ;
    }

  return (
    <div className='container'>
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='texe-cente'>Add New Employee</h2>
                <div className='card-body'>
                    <form action="">

                        <div className='form-group mb-2'>
                            <label htmlFor="inameEmp" className='form-label'>First Name:</label>
                            <input type="text" 
                            placeholder='Enter Employee First Name' 
                            id='inameEmp'
                            name='firstName'
                            value={firstName}
                            className='form-control'
                            onChange={(e) => setFirstName(e.target.value)} 
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="ilastnameEmp" className='form-label'>Last Name:</label>
                            <input type="text" 
                            placeholder='Enter Employee Last Name' 
                            id='ilastnameEmp'
                            name='lastName'
                            value={lastName}
                            className='form-control'
                            onChange={(e) => setLastName(e.target.value)} 
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="iemail" className='form-label'>Employee Email:</label>
                            <input type="text" 
                            placeholder='Enter Employee Email' 
                            id='iemail'
                            name='email'
                            value={email}
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeCompnent