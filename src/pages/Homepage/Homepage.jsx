import Logo from '../../components/Logo/Logo';
import './Homepage.scss';
import Search_bar from '../../components/Search_Bar/Search_bar';
import Search_sugg from '../../components/Search_Suggestion/Search_sugg';
const Homepage = () => {
  return (
    <div className='home'>
      <Logo />
      <div className='home--content'>
        <Search_bar />
        <Search_sugg />
      </div>
    </div>
  );
};
export default Homepage;
