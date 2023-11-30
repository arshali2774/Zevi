import Logo from '../../components/Logo/Logo';
import './Homepage.scss';
import Search_bar from '../../components/Search_Bar/Search_bar';
import Search_sugg from '../../components/Search_Suggestion/Search_sugg';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideSuggestionBox,
  showSuggestionBox,
} from '../../slice/Homepage/Homepage';
const Homepage = () => {
  // states
  const { inputFocus } = useSelector((store) => store.homepage);
  // actions
  const dispatch = useDispatch();
  // input state changes
  const handelInputFocus = () => {
    dispatch(showSuggestionBox());
  };
  const handelInputBlur = () => {
    dispatch(hideSuggestionBox());
  };
  //fetching the data
  const fetchStore = async () => {
    try {
      const res = axios.get('https://fakestoreapi.com/products?limit=5');
      return res;
    } catch (error) {
      console.log(error, 'this is error');
    }
  };
  const { data, isLoading } = useQuery({
    queryKey: ['store'],
    queryFn: fetchStore,
  });
  // loading state
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='home'>
      <div className='logo_homepage'>
        <Logo />
      </div>
      <div className='home--content'>
        <Search_bar
          show={handelInputFocus}
          hide={handelInputBlur}
        />
        <Search_sugg
          data={data}
          inputFocus={inputFocus}
        />
      </div>
    </div>
  );
};
export default Homepage;
