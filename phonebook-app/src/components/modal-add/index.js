import './modal-add.scss'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function AddModal({ setAddContact, setCloseContact }) {

    const handleAddContact = () => {
        console.log('adding')
    };

    const onClose = () => {
        setAddContact(true);
        setCloseContact(false);
    };

    return (
        <div className="modal-add-wrapper">
            <div className="modal-overview">
                <div className="modal-add-container">
                    <div className="close-modal" onClick={() => onClose()}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="body-modal">
                        <div>
                            <h4>New Contact</h4>
                        </div>
                        <div className='contact-info'>
                            <div className='contact-item'>
                                <label htmlFor='name'>
                                    <span>*</span>First Name
                                </label>
                                <input 
                                    type='text' 
                                    placeholder='First Name'
                                    id='name'/>
                            </div>
                            <div className='contact-item'>
                                <label htmlFor='lastname'>
                                    <span>*</span>Last Name
                                </label>
                                <input 
                                    type='text' 
                                    placeholder='Last Name'
                                    id='lastname'/>
                            </div>
                            <div className='contact-item'>
                                <label htmlFor='phone'>
                                    <span>*</span>Phone
                                </label>
                                <input 
                                    type='text' 
                                    placeholder='Phone Number'
                                    id='phone'/>
                            </div>
                        </div>
                        <div className="add-button">
                            <button onClick={() => handleAddContact()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 