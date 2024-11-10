import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://67307cc266e42ceaf1606ebe.mockapi.io/contacts",
});


export const getContacts = async () => {
  const { data } = await contactsInstance.get("/");
  
  return data;
};

export const postContact = async (contact) => {
  const { data } = await contactsInstance.post("/", contact);
  
  return data;
};

export const contactDelete = async (contactId) => {
  const { data } = await contactsInstance.delete(`/${contactId}`);
  return data;
};
