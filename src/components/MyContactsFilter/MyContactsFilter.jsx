import PropTypes from 'prop-types';

import css from './MyContactsFilter.module.css';

const MyContactsFilter = ({ handleChange }) => {
  return (
    <div className={css.filter_wrap}>
      <label>Find contacts by name</label>
      <input
        className={css.input}
        onChange={handleChange}
        name="filter"
        type="text"
      />
    </div>
  );
};

export default MyContactsFilter;

MyContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
