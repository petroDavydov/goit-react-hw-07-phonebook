import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/Phonebook/phone-selectors';
import actions from '../../redux/Phonebook/phone-actions';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeInput = e => {
    dispatch(actions.changeFilter(e.currentTarget.value));
  };
  return (
    <label className={s.textFilter}>
      Find contacts by name
      <input
        className={s.inputFilter}
        type="text"
        value={filter}
        onChange={onChangeInput}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};