import { Form, Input, ButtonForm } from "components";

export const ContactForm = ({handleSubmit}) => {
    return <Form  onSubmit={handleSubmit}>
    <label htmlFor="name">
        Name
        </label>
    <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    />
  <label htmlFor="number">
    Number
    </label>
  <Input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
    <ButtonForm type="submit">
      Add contact
    </ButtonForm>
  </Form>  
}

