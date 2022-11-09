import React from 'react'
// import Select from 'react-select';
import { productsName } from '../../../data/data';

const PriceSelect = () => {
  const priceOptions = productsName.map(product => {
    return{
        value: product.price,
        id: product.id
    }
  })
  return (
    <div className='price_select'>
        <input className="search mt-2 col-offset-4 form-control" placeholder='Price...'/>
    </div>
  )
}

export default PriceSelect