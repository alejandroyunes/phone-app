import './app.scss'
import PhoneBookHeader from './components/phonebook-header'
import PhoneBookBody from './components/phonebook-body'
import RemoveContactModal from './components/modal-remove-contact'
import AddContactModal from './components/modal-add-contact'
import { useState } from 'react'

function PhoneApp () {
  // let sortedPhoneBook = phoneBook.sort((a, b) => {
  //   if (a.name < b.name) {
  //     return -1
  //   } else if (a.name > b.name) {
  //     return 1
  //   } else {
  //     if (a.lastName < b.lastName) {
  //       return -1
  //     } else if (a.lastName > b.lastName) {
  //       return 1
  //     } else {
  //       return 0
  //     }
  //   }
  // })

  const [isAddModal, setAddModal] = useState(false)
  const [isRemoveModalOpen, setRemoveModal] = useState(false)

  const [phoneBook, setPhoneBook] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [contactToDelete, setContactToDelete] = useState('')

  const filteredPhoneBook = phoneBook.filter(entry => {
    return (
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.phone.includes(searchTerm)
    )
  })

  const handleDeleteEntry = id => {
    const updatedPhoneBook = phoneBook.filter(entry => entry.id !== id)
    setPhoneBook(updatedPhoneBook)
  }
  return (
    <>
      <PhoneBookHeader
        setAddModal={setAddModal}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <PhoneBookBody
        setRemoveModal={setRemoveModal}
        phoneBook={filteredPhoneBook}
        setContactToDelete={setContactToDelete}
      />

      {isAddModal && (
        <AddContactModal
          phoneBook={phoneBook}
          setAddModal={setAddModal}
          setPhoneBook={setPhoneBook}
        />
      )}
      {isRemoveModalOpen && (
        <RemoveContactModal
          setRemoveModal={setRemoveModal}
          contactToDelete={contactToDelete}
          handleDeleteEntry={handleDeleteEntry}
        />
      )}
    </>
  )
}

export default PhoneApp
