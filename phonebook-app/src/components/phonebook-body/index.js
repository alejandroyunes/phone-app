import "./phonebook-body.scss"


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
                {array.map((e) => 
                <div className="body-content"> 
                    <h3>{e.firstName} {e.lastName}</h3>
                    <h2>{e.phone}</h2>
                </div> )}
        </div>
    )
}