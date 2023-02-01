import PropTypes from 'prop-types';

import css from './ContactList.module.css';

const MyContactList = ({ contacts, removeContact }) => {
  const names = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name} : {number}
      <button
        className={css.button}
        onClick={() => removeContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className={css.contacts_wrapper}>
      <ul>
        <li className={css.contact_item}> {names}</li>
      </ul>
    </div>
  );
};

export default MyContactList;

MyContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
