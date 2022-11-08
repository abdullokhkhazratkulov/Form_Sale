import React from 'react'
import Select from 'react-select';

const AmountSelector = () => {
  return (
    <div className='amount_selector'>
        <Select className="search mt-2 col-offset-4" isClearable placeholder='Amount...'  />
    </div>
  )
}

export default AmountSelector