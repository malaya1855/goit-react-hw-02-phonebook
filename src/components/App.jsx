import { ContactForm, ContactList, Filter } from 'components';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onHandleSubmit = ev => {
    ev.preventDefault();
    const { name, number } = ev.target.elements;
    const newName = name.value;
    const newContact = { id: nanoid(5), name: newName, number: number.value };
    ev.target.reset();
    const existedContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
    return existedContact
      ? alert(`${newName} is already in your contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };
  onChangeFilter = ev => {
    this.setState({ filter: ev.currentTarget.value });
  };
  onFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  onDeleteBtn = id => {
    const filtered = this.state.contacts.filter(contact => contact.id !== id);
    return this.setState(prevState => ({
      contacts: [...filtered],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.onHandleSubmit} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} changeFilter={this.onChangeFilter} />
        <ContactList
          contacts={this.onFilteredContacts()}
          deleteContacts={this.onDeleteBtn}
        />
      </div>
    );
  }
}

export default App;
