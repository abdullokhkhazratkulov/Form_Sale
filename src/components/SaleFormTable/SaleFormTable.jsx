import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getObj } from '../../redux/slice/slice'

const SaleFormTable = () => {

  const datas = useSelector(state=>state.allData)

  const dispatch = useDispatch()
  
  const onClick = (id) => {
    const findObj = datas.find(objId => objId.id === id)
    dispatch(getObj(findObj))
  }

  return (
    <>
      <table className='table table-bordered mt-5 container text-center'>
          <thead>
              <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Client</th>
                  <th scope='col'>Employee</th>
                  <th scope='col'>Product</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Total</th>
                  <th scope='col'>Edit Btn</th>
              </tr>
          </thead>
          <tbody>
              {datas.map((product, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{product.date}</td>
                  <td>{product.clients.value}</td>
                  <td>{product.employees.value}</td>
                  <td>{product.products.value}</td>
                  <td>{product.price} $</td>
                  <td>{product.product}</td>
                  <td>{product.product * product.price} $</td>
                  <td><button onClick={()=>onClick(product.id)} className='btn btn-danger'>Edit</button></td>
                </tr>
              ))}
          </tbody>
      </table>
    </>
  )
}

export default SaleFormTable