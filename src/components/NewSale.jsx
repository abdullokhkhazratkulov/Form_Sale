import Modal from 'react-modal';
import React, {useState} from 'react'
import Employee from './SaleForm/SaleInputForm/EmployeeSelector';
import Client from './SaleForm/SaleInputForm/ClientSelector';
import Products from './SaleForm/SaleInputForm/ProductSelector';
import Date from './SaleForm/SaleInputForm/DateSelector';
import PriceSelect from './SaleForm/SaleInputForm/PriceSelect';
import AmountSelector from './SaleForm/SaleInputForm/AmountSelector';
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
            <form className='container'>
                <div className="row justify-content-md-center">
                    <div className="col col-md-2">
                        <Date />
                    </div>    
                    <div className="col col-md-4">
                        <Employee />
                    </div>
                    <div className="col col-md-4">
                        <Client />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-md-5">
                        <Products />
                    </div>
                    <div className="col col-md-3">
                        <PriceSelect />
                    </div>
                    <div className="col col-md-2">
                        <AmountSelector />
                    </div>
                </div>
                    <button className='btn btn-success mt-2'>Save</button>
            </form>
        </Modal>
    </div>
  )
}
Modal.setAppElement('body');
export default NewSale