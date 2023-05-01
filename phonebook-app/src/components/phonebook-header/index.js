import './phonebook-header.scss'
import { AiFillHome } from 'react-icons/ai'
import { BsPlusCircleFill } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'

export default function PhoneBookHeader ({ setAddModal }) {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = e => {
    const value = e.target.value
    setSearchValue(value)
  }

  return (
    <div className='header-wrapper'>
      <div className='header-icons'>
        <div>
          <AiFillHome />
        </div>
        <div onClick={() => setAddModal(true)}>
          <BsPlusCircleFill />
        </div>
      </div>
      <div className='contact'>
        <h1>Contacts</h1>
      </div>
      <div className='search'>
        <BiSearchAlt2 />
        <input
          onChange={e => handleSearch(e)}
          id='search'
          name='search'
          type='text'
          placeholder='Search Contact'
        />
      </div>
    </div>
  )
}
