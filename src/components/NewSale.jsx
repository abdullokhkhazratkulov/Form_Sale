import Modal from 'react-modal';
import React, {useState} from 'react'
import Employee from './SaleForm/SaleInputForm/EmployeeSelector';
import Client from './SaleForm/SaleInputForm/ClientSelector';
import Products from './SaleForm/SaleInputForm/ProductSelector';
import Date from './SaleForm/SaleInputForm/DateSelector';
import PriceSelect from './SaleForm/SaleInputForm/PriceSelect';
import AmountSelector from './SaleForm/SaleInputForm/AmountSelector';
import ProductSelector from './SaleForm/SaleInputForm/ProductSelector';
const NewSale = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
  return (
    <div className="new_sale">
        <button onClick={openModal}> Add New Sale</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={true}>
            <form className='container '>
                <div className="row justify-content-md-center">
                    <div className="row">
                    <div className="col col-md-2">
                        <Date />
                    </div>    
                    </div>    
                    <div className="col col-md-3">
                        <Employee />
                    </div>
                    <div className="col col-md-4">
                        <Client />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ProductSelector />
                    </div>
                </div>
                <div className="row d-md-flex justify-content-md-end">
                    <div className="col col-md-4 px-2">
                        <button className='btn btn-success mt-2 col-md-4'>Save</button>
                    </div>
                </div>
            </form>
        </Modal>
    </div>
  )
}
Modal.setAppElement('body');
export default NewSale