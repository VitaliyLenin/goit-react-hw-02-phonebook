import { nanoid } from 'nanoid';
import { Component } from 'react';

import css from './MyContacts.module.css';

class ContactForm extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();
    const { name } = this.state;
    if (this.isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => {
      const { name, contacts, number } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts], name: '', number: '' };
    });
  };

  removeContact(id) {
    this.setState(({ contacts }) => {
      const newContact = contacts.filter(contact => contact.id !== id);
      return { contacts: newContact };
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  isDublicate(name) {
    const normalizedName = name.toLowerCase();
    const { contacts } = this.state;
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  }

  getFilteredContacts() {
    const { filter, contacts } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedName = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedName);
    });

    return result;
  }

  render() {
    const { addContact, handleChange } = this;
    const { name, number } = this.state;
    const contacts = this.getFilteredContacts();
    const names = contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name} : {number}
        <button onClick={() => this.removeContact(id)} type="button">
          Delete
        </button>
      </li>
    ));

    return (
      <div className={css.form_wrapper}>
        <div className={css.phonebook_wrapper}>
          <h2>Phonebook</h2>
          <form onSubmit={addContact}>
            <label>Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
            />

            <label>Number</label>
            <input
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
            />

            <button type="submit"> Add contact</button>
          </form>
        </div>

        <div>
          <label>Find contacts by name</label>
          <input onChange={handleChange} name="filter" type="text" />
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
