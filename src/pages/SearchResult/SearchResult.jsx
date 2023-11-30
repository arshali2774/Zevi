import Logo from '../../components/Logo/Logo';
import Search_bar from '../../components/Search_Bar/Search_bar';
import './SearchResult.scss';
const SearchResult = () => {
  return (
    <div className='search_result'>
      <nav>
        <Search_bar />
        <Logo />
      </nav>
      <main>
        <h1>Search Results</h1>
        <aside className='search_filters'></aside>
      </main>
    </div>
  );
};
export default SearchResult;
