import React from 'react'
import Select from 'react-select';
import { productsName } from '../../../data/data';
const ProductSelector = () => {
    const productsOptions = productsName.map(product => {
        return{
            label: product.productName,
            value: product.id
        }
    })
  return (
    <div className="products">
        <Select className="search mt-2 col-offset-4" isClearable placeholder='Products...' options={productsOptions} />
    </div>
    
  )
}

export default ProductSelector