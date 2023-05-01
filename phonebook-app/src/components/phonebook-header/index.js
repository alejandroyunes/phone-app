import './phonebook-header.scss'
import {AiFillHome} from 'react-icons/ai'
export default function PhoneBookHeader (){
    return (
        <div className="header-wrapper">
            <div className='header-icons'>
                <div>home</div>
                <div><AiFillHome/></div>
            </div>
            <div className='contact'></div>
            <div className='search'></div>
        </div>
    )
}