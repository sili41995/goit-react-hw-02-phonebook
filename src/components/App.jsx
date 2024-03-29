import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Section from 'components/Section';
import filteredContacts from 'utils/filteredContacts';

class App extends Component {
  state = { contacts: [], filter: '' };

  handleFormSubmit = (values, { resetForm }) => {
    const isContact = this.state.contacts.some(
      ({ name }) => name === values.name
    );
    if (isContact) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    const contact = { id: nanoid(), ...values };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    resetForm();
  };

  handleDelBtnClick = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleFilterChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = filteredContacts(filter, contacts);

    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm handleFormSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList
          contacts={visibleContacts}
          handleDelBtnClick={this.handleDelBtnClick}
        />
      </Section>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default App;
