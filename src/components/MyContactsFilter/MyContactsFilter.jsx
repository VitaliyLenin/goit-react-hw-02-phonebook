import PropTypes from 'prop-types';

// import css from './MyContactsFilter.module.css';

const MyContactsFilter = ({ handleChange }) => {
  return (
    <div>
      <label>Find contacts by name</label>
      <input onChange={handleChange} name="filter" type="text" />
    </div>
  );
};

export default MyContactsFilter;

MyContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
