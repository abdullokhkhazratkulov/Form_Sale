import React, {useState} from 'react'
import Modal from 'react-modal';

const AddorEdit = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
  return (
    <div>
        <button class="btn btn-outline-secondary mt-2 w-36" onClick={openModal} type="button" id="button-addon">ADD</button>
        <Modal isOpen={modalIsOpen} ariaHideApp={true}>
            <input type="text" />
            <button onClick={closeModal}>Save</button>
        </Modal>
    </div>
  )
}

export default AddorEdit