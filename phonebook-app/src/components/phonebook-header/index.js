import './phonebook-header.scss'
import {AiFillHome} from 'react-icons/ai'
import {BsPlusCircleFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'

export default function PhoneBookHeader ({setIsConctactOpen}){

    const handleAddContact = (e) => {
        const value = e.target.value
        console.log(value)
    }


    return (
        <div className="header-wrapper">
            <div className='header-icons'>
                <div><AiFillHome/></div>
                <div onClick={()=> setIsConctactOpen(true)}><BsPlusCircleFill /></div>
            </div>
            <div className='contact'>
                <h1>Contacts</h1>
            </div>
            <div className='search'>
                <BiSearchAlt2/>
                <input type='text' placeholder='search contact' onChange={(e)=> handleAddContact(e)}/>
            </div>
        </div>
    )
}