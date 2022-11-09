import React from 'react'
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
        <select className="search mt-2 col-offset-4 form-control" isClearable placeholder='Client...'  options={clientsOptions} />
    </div>
    
  )
}

export default ClientSelector