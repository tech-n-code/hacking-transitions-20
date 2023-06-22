import React, {useState, useContext} from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function DayModal({selectedDate, isOpen, handleCloseModal})
{
    function closeModal(e) {
        e.preventDefault();
        handleCloseModal();
    }

    const modalStyle = {
        content:{
            position: 'absolute',
            top: '50%',
            bottom: '50%',
            left: '50%',
            right: '50%',
            transform: "translate(-50%, -50%)",
            height: "fit-content",
            width: "fit-content",
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            borderRadius: '10px',
            outline: 'none',
            padding: '30px'
          }}

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Day View Modal"
            style={modalStyle}
        >
            <h2>{selectedDate.toLocaleString("default")}</h2>
            {/*Events Logic Goes Here */}
            <button onClick={closeModal}>Close</button>
        </Modal>
    )
}