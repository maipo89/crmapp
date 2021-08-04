import React, {useState, useEffect} from "react"
import Filter from "./Filter"
import AddContact from "./AddContact"
import Contact from "./Contact"
import contacts from "./data"
import FilterMobile from "./FilterMobile"

function Body(props){

    const [array, setArray] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [rotate, setRotate] = useState({});
    const [isDesktop, setDesktop] = useState(window.innerWidth < 848);
      
    const updateMedia = () => {
        setDesktop(window.innerWidth < 848);
    };
      
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    function addContact(newContact) {
        setArray(prevContacts => {
          return [...prevContacts, newContact]
        })
    }

    function clickArrow() {
        setIsClicked(!isClicked);
        setRotate({transform: "rotate(180deg"})
    }

    const numberContacts = array.length + contacts.length
    console.log(numberContacts)

    return (
        <div className="body">
            {isDesktop ?
            <FilterMobile isClicked={isClicked} rotate={rotate} onClick={clickArrow} />
            :
            <Filter isClicked={isClicked} rotate={rotate} onClick={clickArrow} numberContacts={numberContacts}/>}
            
            {isClicked ? null : <AddContact contact={props.contact} addContact={addContact}/>}
            <ul>
                {contacts.map(contact => { return <Contact name={contact.name} surname={contact.surname} email={contact.email} phone={contact.phone} />})}
                {array.map(newContact => { return <Contact name={newContact.name} surname={newContact.surname} email={newContact.email} phone={newContact.telephone} />})}
            </ul>
        </div>
    )
}

export default Body