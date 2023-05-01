import './phonebook-header.scss'
import {AiFillHome} from 'react-icons/ai'
import {BsPlusCircleFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import { useState } from 'react'

export default function PhoneBookHeader (){
    const [open, setOpen] = useState(false)

    const handleSearchInput = (e) => {
        const value = e.target.value
        console.log(value)
    }

    const handleAddContact = () => {
        setOpen(true)
    }

    return (
        <div className="header-wrapper">
            <div className='header-icons'>
                <div><AiFillHome/></div>
                <div onClick={handleAddContact}><BsPlusCircleFill /></div>
            </div>
            <div className='contact'>
                <h1>Contacts</h1>
            </div>
            <div className='search'>
                <BiSearchAlt2/>
                <input type='text' placeholder='search contact' onChange={(e)=> handleSearchInput(e)}/>
            </div>
        </div>
    )
}