import React from 'react'
import useInput from '../../../hooks/useInput'
import Client from './Client'
import Employee from './Employee'

const Inputs = () => {
    const [employeeName,bindEmployeeName, resetEmployeeName] = useInput('')
    const [clientName,bindClientName, resetClientName] = useInput('')
    const [date, bindDate, resetDate] = useInput('')
    const submitHandler = e => {
        e.preventDefault()
        resetEmployeeName()
        resetClientName()
        resetDate()
    }
  return (
    <div>
        <Employee bind={bindEmployeeName}/>
        <Client  bind={bindClientName}/>
        <input type="date" min="02-11-202a2"  bind={bindDate}/>
    </div>
  )
}

export default Inputs
