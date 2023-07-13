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

    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    )
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
  onDeleteBtn = ev => {
    const filtered = this.state.contacts.filter(
      contact => contact.id !== ev.target.id
    );
    this.setState({ contacts: [...filtered] });
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
