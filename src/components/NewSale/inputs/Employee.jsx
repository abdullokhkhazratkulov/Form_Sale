import React from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { employeesName } from '../../../data/data';
const Employee = () => {
    const employeesOptions = employeesName.map(employee => {
        return{
            label: employee.employeeName,
            value: employee.id
        }
    })

  return (
    <div className="input-group mb-2 align-items-center">
        <Select className="search mt-2 col-md-2 col-offset-4" onClick={() => console.log(employeesOptions.id)} isClearable placeholder='Employee...' options={employeesOptions}/> 
        {/* <button class="btn btn-outline-secondary mt-2 w-36" type="button" id="button-addon">Edit</button> */}
    </div>
    
  )
}

export default Employee