import React from 'react'
import Select from 'react-select/creatable';
import {Controller} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getPrice } from '../../redux/slice/slice';

const Selects = ({register, options, placeholder, control, name}) => {

  const dispatch = useDispatch()
  
  const allOptions = options.map(data => {
    return{
      id: data.id,
      label: data.name,
      value: data.name
    }
  })

  const handleChange = (handle) => {
    const findProduct = options.find(product => product.id === handle.id).price
    dispatch(getPrice(findProduct))
  };

  return (
    <Controller 
      name={name}
      control={control}
      ref={register}
      rules={{required: 'error'}}
      render={({field:{onChange,value},fieldState:{error}})=>(
        <Select 
          placeholder={placeholder}
          options={allOptions}
          value={value}
          autoFocus
          onChange={(newValue) => {
            const val = newValue.value
            onChange(newValue)
            name === 'products' && handleChange(newValue)
          }}
        />
      )}
    />
    
  )
}

export default Selects