import { useDispatch, useSelector } from 'react-redux';
import './Search_bar.scss';
import { CiSearch } from 'react-icons/ci';
import { useMemo, useState } from 'react';
import { searchTextChange } from '../../slice/Homepage/Homepage';
const Search_bar = ({ show, hide }) => {
  //local state
  const [localSearch, setLocalSearch] = useState('');
  //dispatch
  const dispatch = useDispatch();
  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        const value = e.target.value;
        dispatch(searchTextChange({ value }));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <div className='search_bar'>
      <input
        type='text'
        placeholder='Search'
        className='search_bar--input'
        name='search'
        onFocus={show}
        onBlur={hide}
        onChange={optimizedDebounce}
        value={localSearch}
      />
      <button className='search_bar--btn'>
        <CiSearch className='search_bar--icon' />
      </button>
    </div>
  );
};
export default Search_bar;
