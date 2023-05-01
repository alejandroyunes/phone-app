import "./phonebook-body.scss"
import {AiOutlineDelete} from 'react-icons/ai'

export default function PhoneBookBody ({setIsRemoveOpen}){

    const array = [
    {
        firstName: "Alex",
        lastName: "Cano",
        phone: "304 669 5598"
    },
    {
        firstName: "John",
        lastName: "Lennon",
        phone: "304 669 5598"
    },
    {
        firstName: "Paul",
        lastName: "Mcarcarny",
        phone: "304 669 5598"
    }
]

    return (
        <div className="body-wrapper">
                {array ? array.map((e, i) => 
                <div className="body-content" key={i}> 
                    <div className="info">
                        <h3>{e.firstName} {e.lastName}</h3>
                        <h2>{e.phone}</h2>
                    </div>
                    <div className="delete-svg" onClick={() => setIsRemoveOpen(true)}>
                        <AiOutlineDelete/>
                    </div>
                </div>  )
                    :
                <div className="body-no-content"> 
                    <h3>no contacts</h3>
                    <h2></h2>
                </div>
    }
        </div>
    )
}