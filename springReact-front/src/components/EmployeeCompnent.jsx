import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import {useNavigate, useParams} from 'react-router-dom';

const EmployeeCompnent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const {id} = useParams();
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate()
    useEffect(() =>{
        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email)
            }).catch(error =>{
                console.error(error)
            })
        }
    },[id])

    function saveOrUpdateEmployee(e){
            e.preventDefault();

            if(validateForm()){
                const employee = {firstName, lastName,email}
                console.log(employee)


                if(id){
                    updateEmployee(id,employee).then((response) => {
                        console.log(response.data)
                        navigator('/employees')
                    }).catch(error =>{
                        console.error(error)
                    })
                }else{

                    createEmployee(employee).then((response) =>{
                        console.log(response.data)
                        navigator('/employees')
                    }).catch(error => {
                        console.error(error)
                    });
                }

            }
        
        }

        function pageTitles(){
            if(id){
                return <h2 className='texe-cente'>Update Employee</h2>
            }else{
                <h2 className='texe-cente'>Add New Employee</h2>
            }
        }

    function validateForm(){
        let valid = true;
        const errorsCopy = {... errors};

        // if(firstName.trim()){
        //     errorsCopy.firstName = '';

        // }else{
        //     errorsCopy.firstName = 'First Name is required'
        //     valid = false;
        // }
        if(!firstName.trim()){
            errorsCopy.firstName = 'First Name is required'
            valid = false;
        }
        if(!lastName.trim()){
            errorsCopy.lastName = 'Last Name is required'
            valid = false;
        }
        if(!email.trim()){
            errorsCopy.email = 'Email is required'
            valid = false;
        }

        setErrors(errorsCopy)
        return valid;
    }

  return (
    <div className='container'>
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitles()}
                <div className='card-body'>
                    <form action="">

                        <div className='form-group mb-2'>
                            <label htmlFor="inameEmp" className='form-label'>First Name:</label>
                            <input type="text" 
                            placeholder='Enter Employee First Name' 
                            id='inameEmp'
                            name='firstName'
                            value={firstName}
                            className= {`form-control ${errors.firstName ? 'is-invalid': ''}`}
                            onChange={(e) => setFirstName(e.target.value)} 
                            />
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="ilastnameEmp" className='form-label'>Last Name:</label>
                            <input type="text" 
                            placeholder='Enter Employee Last Name' 
                            id='ilastnameEmp'
                            name='lastName'
                            value={lastName}
                            className= {`form-control ${errors.lastName ? 'is-invalid': ''}`}
                            onChange={(e) => setLastName(e.target.value)} 
                            />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="iemail" className='form-label'>Employee Email:</label>
                            <input type="text" 
                            placeholder='Enter Employee Email' 
                            id='iemail'
                            name='email'
                            value={email}
                            className= {`form-control ${errors.email ? 'is-invalid': ''}`}
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeCompnent