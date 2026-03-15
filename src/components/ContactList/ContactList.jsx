import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function ContactList() {
  const { items, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
   <li key={contact.id} className="contact-item">
  {contact.name}: {contact.number}
  <button
    className="delete-btn"
    onClick={() => dispatch(deleteContact(contact.id))}
  >
    Delete
  </button>
</li>
      ))}
    </ul>
  );
}