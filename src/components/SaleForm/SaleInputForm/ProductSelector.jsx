import React from 'react'
import { useState } from 'react';
import { productsName } from '../../../data/data';
import AmountSelector from './AmountSelector';
import PriceSelect from './PriceSelect';
const ProductSelector = () => {
  const [active, setActive] = useState(false)
  const onBlur = () => {
    setActive(!active)
  }
  const onClick = (id) => {
    console.log(id);
  }


  return (
    <div className="products">
      <div className="row justify-content-md-center">
      <div className="col col-lg-3">
          {/* <select className="search mt-2 col-offset-4 form-control" isClearable placeholder='Products...' >
          </select> */}
            <input type="text" onFocus={onBlur} onBlur={onBlur}/>
            {active && 
              <ul>
                {productsName.map(prod => (
                  <span type="text" key={prod.id} onClick={()=>onClick(prod)}>{prod.productName}</span>
                ))}
              </ul>
            }

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