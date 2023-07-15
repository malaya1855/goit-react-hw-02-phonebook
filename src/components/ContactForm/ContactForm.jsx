import { Form, Input, ButtonForm } from 'components';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };
  onSubmitForm = ev => {
    ev.preventDefault();
    this.setState({ id: nanoid(5) });
    ev.target.reset();
    return this.props.handleSubmit(this.state);
  };

  handleChange = ev => {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitForm}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}
