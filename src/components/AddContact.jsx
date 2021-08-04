import React, {useState} from "react"

function AddContact(props){

    const [contact, setContact] = useState({name: "", surname: "", email: "", telephone: ""});

    function handleChange(event) {
        const {value, name} = event.target;
        setContact(prevValue => {
            return {...prevValue, [name]: value}
        })
    }
  
    function createContact(event) {
        event.preventDefault();
        props.addContact(contact)
    }

    return (
            <div className="create-contact-container">
              <div className="create-contact">
                    <div>
                        <h4>Name</h4>
                        <input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            value={contact.name}
                            required
                        />
                    </div>
                    <div>
                        <h4>Surname</h4>
                        <input
                            onChange={handleChange}
                            name="surname"
                            type="text"
                            value={contact.surname}
                            required
                        />
                    </div>
                    <div>
                        <h4>Email</h4>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="text"
                            value={contact.email}
                            required
                        />
                    </div>
                    <div>
                        <h4>Telephone</h4>
                        <input
                            onChange={handleChange}
                            name="telephone"
                            type="text"
                            value={contact.telephone}
                            required
                        />
                    </div>
                    <button onClick={createContact}>Create Contact</button>
               </div>
            </div>
    )
}

export default AddContact