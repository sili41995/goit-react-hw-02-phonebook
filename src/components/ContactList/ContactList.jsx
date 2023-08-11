import filteredContacts from 'utils/filteredContacts';

const ContactList = ({ contacts, filter, handleDelBtnClick }) => {
  const visibleContacts = filteredContacts(filter, contacts);
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            type='button'
            onClick={() => {
              handleDelBtnClick(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
