import './remove-modal.scss'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function RemoveModal({ setIsOpen, setIsCancel, setCancelAll }) {

    const closeCalculation = () => {
        setIsCancel(false);
        setIsOpen(false);
        setCancelAll(true);
    };

    const onClose = () => {
        setIsOpen(true);
        setIsCancel(false);
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
                            <button onClick={() => closeCalculation()}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 