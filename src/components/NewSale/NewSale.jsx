import Modal from 'react-modal';
import React, {useState} from 'react'
import Employee from './inputs/Employee';
import Date from './inputs/Date';

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
            <Date />
            <Employee />
            <button onClick={closeModal}>x</button>
        </Modal>
    </div>
  )
}

export default NewSale