import PropTypes from "prop-types";
import { ButtonDelete, List } from "components";

export const ContactList = ({contacts, deleteContacts}) => {
    return <ul>
{contacts.map((contact) => {
    const nameArray = contact.name.split(' ');
    const nameFirstUpperLetter = nameArray.map((word) => 
        word.replace(word[0], word[0].toUpperCase()))
        .join(' ');
return <List key={contact.id}>
    <p>{nameFirstUpperLetter}: {contact.number}</p>
    <ButtonDelete type='ButtonDelete' id= {contact.id} onClick = {deleteContacts}>Delete</ButtonDelete>
    </List>
    })}
        </ul>
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
  }
