import { AnimatePresence, motion } from 'framer-motion';
import Card from '../Card/Card';
import './Search_sugg.scss';

const Search_sugg = ({ data, inputFocus }) => {
  return (
    <AnimatePresence>
      {inputFocus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='search_suggestion'
        >
          <div className='suggestion_box suggestion_box--trends'>
            <h2>Latest Trends</h2>
            <div className='suggestion_box--content'>
              {data?.data.map((item) => (
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
              {data?.data.map((item) => (
                <li key={item.title}>
                  <button className='popular_btn'>{item.title}</button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Search_sugg;
