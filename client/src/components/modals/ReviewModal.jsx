import React, { useState } from "react";
import Modal from 'react-modal';

const ReviewModalComponent = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(props.showModal);

    return (
        <div>
            <Modal show={modalIsOpen} close={props.close}>
                <span>Modal is here</span>
                <button onClick={() => setModalIsOpen(false)}>Cancel</button>
            </Modal>
        </div>
    )
};

export default ReviewModalComponent;