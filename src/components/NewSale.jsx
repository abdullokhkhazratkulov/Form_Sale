import Modal from 'react-modal';
import React, {useState} from 'react'
import ProductSelector from './SaleForm/SaleFormInputs';
import SaleFormTable from './SaleFormTable/SaleFormTable';
import { useDispatch } from 'react-redux';
import { clearPrice } from '../redux/slice/slice';
const NewSale = () => {

    const dispatch = useDispatch()

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        dispatch(clearPrice())
    }
    
  return (
    <div className="new_sale d-flex justify-content-center py-5">
        <button className='btn btn-primary' onClick={openModal}> Add New Sale</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={true}>
            <button className='btn btn-dark' onClick={closeModal}>Close</button>
            <ProductSelector/>
            <SaleFormTable/>
        </Modal>
    </div>
  )
}
Modal.setAppElement('body');
export default NewSale