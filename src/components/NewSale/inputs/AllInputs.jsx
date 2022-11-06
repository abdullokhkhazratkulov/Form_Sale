import React from 'react'
import useInput from '../../../hooks/useInput'
import Employee from './Employee'

const Inputs = () => {
    // const [employeesName,bindEmployeesName, resetEmployeesName] = useInput('')
    // const [clientName,bindClientName, resetClientName] = useInput('')
    // const [date, bindDate, resetDate] = useInput('')
    // const submitHandler = e => {
    //     e.preventDefault()
    //     resetEmployeesName()
    //     resetClientName()
    //     resetDate()
    // }
  return (
    <div>
        {/* <Employee /> */}
        <input type="date" min="02-11-202a2"  />
    </div>
  )
}

export default Inputs
