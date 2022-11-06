import Modal from 'react-modal';
import React, {useState} from 'react'
import Employee from './inputs/Employee';
import Client from './inputs/Client';
import Products from './inputs/Products';
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
        <Modal isOpen={modalIsOpen} ariaHideApp={true}>
            <form>    
                <Employee />
                <Client />
                <Products />
                <button onClick={closeModal}>x</button>
            </form>
        </Modal>
    </div>
  )
}
Modal.setAppElement('body');
export default NewSale