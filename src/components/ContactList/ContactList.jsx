import { List, Items, BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContacts } from '../../redux/slice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const listDeleteContact = id => {
    dispatch(deleteContacts(id));
  };
  const normalizedFilter = filter.toLowerCase();
  const changedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(changedContacts);

  return (
    <List>
      {changedContacts.map(({ id, name, number }) => (
        <Items key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <BtnDelete type="submit" onClick={() => listDeleteContact(id)}>
            Delete
          </BtnDelete>
        </Items>
      ))}
    </List>
  );
};
export default ContactList;
