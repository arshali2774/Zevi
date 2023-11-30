import Card from '../Card/Card';
import './Search_sugg.scss';
const Search_sugg = ({ data }) => {
  return (
    <div className='search_suggestion'>
      <div className='suggestion_box suggestion_box--trends'>
        <h2>Latest Trends</h2>
        <div className='suggestion_box--content'>
          {data.data.map((item) => (
            <Card
              image={item.image}
              imgName={item.title}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className='suggestion_box suggestion_box--popular'>
        <h2>Popular Suggestion</h2>
        <ul>
          {data.data.map((item) => (
            <li key={item.title}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Search_sugg;
