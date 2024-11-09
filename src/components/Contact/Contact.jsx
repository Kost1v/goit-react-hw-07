import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button
        type="button"
        onClick={() => {
          const action = deleteContact(id);
          dispatch(action);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
