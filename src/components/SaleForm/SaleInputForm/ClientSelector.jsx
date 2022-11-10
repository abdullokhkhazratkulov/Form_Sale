import React from 'react'
import Select from 'react-select';
import { clientsName } from '../../../data/data';
const ClientSelector = () => {
    const clientsOptions = clientsName.map(client => {
        return{
            label: client.clientName,
            value: client.id
        }
    })
  return (
    <div className="client">
        <Select className="search mt-2 col-offset-4" isClearable placeholder='Client...'  options={clientsOptions} />
    </div>
    
  )
}

export default ClientSelector