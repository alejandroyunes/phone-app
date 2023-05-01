import './modal-remove.scss'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function RemoveContactModal({ setIsRemoveOpen }) {

    const handleCancelRemoveContact = () => {
        setIsRemoveOpen(false);
        console.log('cancel')
    };

    const onClose = () => {
        setIsRemoveOpen(false);
    };

    return (
        <div className="modal-remove-wrapper">
            <div className="modal-overview">
                <div className="modal-container">
                    <div className="close-modal" onClick={() => onClose()}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="cancel-modal">
                        <div><h4>Are you sure you want to delete the contact?</h4></div>
                        <div className="cancel-buttons">
                            <button onClick={() => onClose()}>No</button>
                            <button onClick={() => handleCancelRemoveContact()}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 