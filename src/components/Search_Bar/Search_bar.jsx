import { useDispatch, useSelector } from 'react-redux';
import './Search_bar.scss';
import { CiSearch } from 'react-icons/ci';
import { useEffect, useMemo, useState } from 'react';
import { searchTextChange } from '../../slice/Homepage/Homepage';
import { Form, Navigate } from 'react-router-dom';
import { searchProduct } from '../../slice/SearchResult/SearchResult';
const Search_bar = ({ show, hide }) => {
  //local state
  const [localSearch, setLocalSearch] = useState('');
  //on reload

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
        dispatch(searchProduct(value));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  return (
    <Form
      className='search_bar'
      action='/result'
    >
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
      <button
        className='search_bar--btn'
        type='submit'
      >
        <CiSearch className='search_bar--icon' />
      </button>
    </Form>
  );
};
export default Search_bar;
