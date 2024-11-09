import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);

  const filter = useSelector((state) => state.filters.name);

  const filteredUsers = selectContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {filteredUsers.map((user) => {
        return (
          <li key={user.id}>
            <Contact name={user.name} number={user.number} id={user.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
