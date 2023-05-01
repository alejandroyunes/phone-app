import "./phonebook-body.scss"
import {AiOutlineDelete} from 'react-icons/ai'

export default function Layout (){

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
                {array ? array.map((e) => 
                <div className="body-content"> 
                    <div className="info">
                        <h3>{e.firstName} {e.lastName}</h3>
                        <h2>{e.phone}</h2>
                    </div>
                    <div className="delete-svg">
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