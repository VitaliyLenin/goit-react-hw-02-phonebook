import { nanoid } from 'nanoid';
import { Component } from 'react';

import css from './ConractForm.module.css';

class ContactForm extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Vitaliy Lenin' },
      { id: nanoid(), name: 'Oleshko Anastasia' },
    ],
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();
    this.setState(prevState => {
      const { name, contacts, number } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { addContact, handleChange } = this;
    const { contacts } = this.state;
    const names = contacts.map(({ id, name, number }) => (
      <li key={id}>
        {' '}
        {name} : {number}{' '}
      </li>
    ));

    return (
      <div className={css.form_wrapper}>
        <div className={css.phonebook_wrapper}>
          <h2>Phonebook</h2>
          <form onClick={addContact}>
            <label>Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Contact name"
            />
            <button type="submit"> Add contact</button>

            <label htmlFor="">Number</label>
            <input
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </form>
        </div>

        <div className={css.contacts_wrapper}>
          <h2>Contacts</h2>
          <ul>
            <li> {names}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactForm;
