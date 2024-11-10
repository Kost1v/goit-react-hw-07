import { selectFilteredContacts, selectNameFilter } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
