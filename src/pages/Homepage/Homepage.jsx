import Logo from '../../components/Logo/Logo';
import './Homepage.scss';
import Search_bar from '../../components/Search_Bar/Search_bar';
import Search_sugg from '../../components/Search_Suggestion/Search_sugg';
import { useQuery } from 'react-query';
import axios from 'axios';
const Homepage = () => {
  const fetchStore = async () => {
    try {
      const res = axios.get('https://fakestoreapi.com/products?limit=5');
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const { data } = useQuery({ queryKey: ['store'], queryFn: fetchStore });
  console.log(data);
  return (
    <div className='home'>
      <Logo />
      <div className='home--content'>
        <Search_bar />
        <Search_sugg data={data} />
      </div>
    </div>
  );
};
export default Homepage;
