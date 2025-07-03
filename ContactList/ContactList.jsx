import React, { useContext } from "react"
import ContactItem from "../ContactList/ContactList"
import { ContactContext } from "../Context/ContactContext"

const ContactsList = () => {
    const {contacts} = useContext(ContactContext)
    return (
        <div>
            {
                contacts.map(
                    (contact) => {
                        return <ContactItem
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            last_time_connected={contact.last_time_connected}
                            img={contact.img}
                            last_message={contact.last_message}
                            unread_messages={contact.unread_messages}
                        />
                        /* O mas facil <ContactItem key={contact.id} {...contact}/> */
                    }
                )
            }
        </div>
    )
}

export default ContactsList




