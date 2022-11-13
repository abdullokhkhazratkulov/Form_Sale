import React, {useId, useEffect} from 'react'
import Selects from './SelectSettings';
import { productsName, employeesName, clientsName } from '../../data/data';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addData, updateForm } from '../../redux/slice/slice';
import { useState } from 'react';

const SaleFormInputs = () => {

  const getPrice = useSelector(state=> state.selectedProduct)

  
  const id = useId()
  
  const dispatch = useDispatch()
  
  const todayDate = new Date().toISOString().slice(0, 10);
  
  const editObj = useSelector(state=> state.newObj)

  const editBtn = useSelector(state=> state.btnEdit)

  const [edit, setEdit] = useState(false)

  const { control, register, handleSubmit, setValue, reset, formState, setFocus } = useForm(
    {
      defaultValues:{
        id,
        clients: "",
        employees: "",
        price: null || getPrice,
        product: null,
        products: "",
        date: todayDate
      },
      mode:'onSubmit'
    }
  );

  const byDefaultValues = {
        id,
        clients: "",
        employees: "",
        price: null,
        product: null,
        products: "",
        date: todayDate
  }

  const onSubmit = data => {
    dispatch(addData(data))
    reset({...formState.defaultValues, ...byDefaultValues})
  };
  
  const onEdit = () => {
    reset({...formState.defaultValues, ...editObj})  
  }
  
  const handleEdit = (data) => {
    dispatch(updateForm(data))
    reset({...formState.defaultValues, ...byDefaultValues})
    setEdit(false)
  }

  useEffect(() => {
    onEdit()
    if(editBtn){
      setEdit(true)
    }
  }, [editObj]);

  useEffect(() => {
    setValue('price', getPrice)
    setFocus('clients', { shouldSelect: true });
  }, [getPrice, setFocus]);
  
  return (
    <>
      <form className="product container" onSubmit={handleSubmit(edit ? handleEdit : onSubmit)}>
            <div className="row justify-content-md-center">
              <div className="col-2">
                <label>Date</label>
                <input className='border border-1 border-grey px-2 form-control' type="date" {...register("date")} max={todayDate}/>
              </div>
              <div className="col-4">
              <label>Employees</label>
              <Selects
                placeholder={'Выберите ответственного сотрудника'}
                options={employeesName}
                control={control}
                name={'employees'}
                />
              </div>
              <div className="col-3">
                <label>Clients</label>
                <Selects
                placeholder={'Выберите Клиент...'}
                options={clientsName}
                control={control}
                name={'clients'}
                />
              </div>
            </div>
            <div className="row justify-content-md-center mt-3">
              <div className="col-6">
              <label>Products</label>
                <Selects
                placeholder={'Введите название товара'}
                options={productsName}
                control={control}
                name={'products'}
                /> 
              </div>
              <div className="col-1 px-1">
                <label>Price ( $ )</label>
                <input type="number" className='form-control' placeholder='Цена' {...register("price")} />
              </div>
              <div className="col-2">
                <label >Quantity</label>
                <input type="number" className='form-control'  placeholder='Введите количество' {...register("product")}/>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-2 mt-3 mx-5">
                <button className='btn btn-success'>Sumbit</button>
              </div>
            </div>
      </form>
    </>
  )
}

export default SaleFormInputs