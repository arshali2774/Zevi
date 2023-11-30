import './Search_bar.scss';
import { CiSearch } from 'react-icons/ci';
const Search_bar = () => {
  return (
    <div className='search_bar'>
      <input
        type='text'
        placeholder='Search'
        className='search_bar--input'
      />
      <CiSearch className='search_bar--icon' />
    </div>
  );
};
export default Search_bar;
