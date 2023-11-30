import Card from '../Card/Card';
import './Search_sugg.scss';
import { faker } from '@faker-js/faker';
const Search_sugg = () => {
  const data = Array.from({ length: 5 }, () => ({
    name: faker.commerce.productName(),
    imageUrl: faker.image.urlLoremFlickr(),
  }));
  return (
    <div className='search_suggestion'>
      <div className='suggestion_box suggestion_box--trends'>
        <h2>Latest Trends</h2>
        <div className='suggestion_box--content'>
          {data.map((item) => (
            <Card
              image={item.imageUrl}
              imgName={item.name}
              key={item.name}
            />
          ))}
        </div>
      </div>
      <div className='suggestion_box suggestion_box--popular'>
        <h2>Popular Suggestion</h2>
        <ul>
          {data.map((item) => (
            <li key={item.name}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Search_sugg;
