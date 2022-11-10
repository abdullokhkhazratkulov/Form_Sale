import React from 'react'
import { useState } from 'react';
import Select from 'react-select';
import { productsName } from '../../../data/data';
import AmountSelector from './AmountSelector';
import PriceSelect from './PriceSelect';
const ProductSelector = () => {
  const productOptions = productsName.map(product => {
    return{
      value: product.productName,
      label: product.productName,
      id: product.id
    }
  })
  const handleChange = (selectedOption) => {
    const findProducts = productsName.find(product => product.id === selectedOption.id)
    console.log(findProducts);
  };
  
  return (
    <div className="products">
      <div className="row justify-content-md-center">
      <div className="col col-lg-3">
          <Select className="search mt-2 col-offset-4 " onChange={handleChange} isSearchable options={productOptions} isClearable placeholder='Products...' />
        </div>
        <div className="col col-lg-2">
            <PriceSelect />
        </div>
        <div className="col col-lg-2">
            <AmountSelector />
        </div>
      </div>
    </div>
    
  )
}

export default ProductSelector