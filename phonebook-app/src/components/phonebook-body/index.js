import { useEffect } from 'react'
import './phonebook-body.scss'
import { AiOutlineDelete } from 'react-icons/ai'

export default function PhoneBookBody ({
  setRemoveModal,
  phoneBook,
  setContactToDelete
}) {
  const handleDeleteContact = e => {
    setRemoveModal(true)
    setContactToDelete(e)
  }

  return (
    <div className='body-wrapper'>
      {phoneBook.length !== 0 ? (
        phoneBook.map((e, i) => (
          <div className='body-content' key={i}>
            <div className='info'>
              <h3>
                {e.name} {e.lastName}
              </h3>
              <h2>{e.phone}</h2>
            </div>
            <div
              className='delete-svg'
              onClick={() => handleDeleteContact(e.id)}
            >
              <AiOutlineDelete />
            </div>
          </div>
        ))
      ) : (
        <div className='body-no-content'>
          <h3>no contacts</h3>
        </div>
      )}
    </div>
  )
}
