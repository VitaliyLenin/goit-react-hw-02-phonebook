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
  };

  addContact = e => {
    e.preventDefault();
    this.setState(prevState => {
      const { name, contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
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
    const names = contacts.map(({ id, name }) => <li key={id}> {name} </li>);

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
