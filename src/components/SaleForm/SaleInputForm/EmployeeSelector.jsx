import React from 'react'
import Select from 'react-select';  
import { employeesName } from '../../../data/data';
const EmployeeSelector = () => {
    const employeesOptions = employeesName.map(employee => {
        return{
            label: employee.employeeName,
            value: employee.id
        }
    })

  return (
    <div className="employee">
        <Select className="search mt-2 col-offset-4" isClearable placeholder='Employee...' options={employeesOptions}/> 
    </div>
    
  )
}

export default EmployeeSelector