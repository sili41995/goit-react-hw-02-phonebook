import Contact from 'components/Contact/Contact';
import filteredContacts from 'utils/filteredContacts';

const ContactList = ({ contacts, filter, handleDelBtnClick }) => {
  const visibleContacts = filteredContacts(filter, contacts);
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          handleDelBtnClick={() => handleDelBtnClick(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
