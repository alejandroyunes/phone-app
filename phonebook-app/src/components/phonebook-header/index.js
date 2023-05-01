import './phonebook-header.scss'
import { AiFillHome } from 'react-icons/ai'
import { BsPlusCircleFill } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'

export default function PhoneBookHeader ({
  setAddModal,
  setSearchTerm,
  searchTerm
}) {
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
          onChange={e => setSearchTerm(e.target.value)}
          id='search'
          name='search'
          type='text'
          value={searchTerm}
          placeholder='Search Contact'
        />
      </div>
    </div>
  )
}
