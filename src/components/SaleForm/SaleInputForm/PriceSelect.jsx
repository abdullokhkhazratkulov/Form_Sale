import React from 'react'
import Select from 'react-select';

const PriceSelect = () => {
  return (
    <div className='price_select'>
        <Select className="search mt-2 col-offset-4" isClearable placeholder='Price...'  />
    </div>
  )
}

export default PriceSelect