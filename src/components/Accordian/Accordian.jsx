import './Accordian.scss';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiCaretDown } from 'react-icons/pi';
import { Form } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../slice/SearchResult/SearchResult';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
const Accordion = ({ question, answer, stars = false }) => {
  const [isOpen, setIsOpen] = useState(true);
  //stars
  const ratingStars = [];
  //dispatch
  const dispatch = useDispatch();
  const handleCheckbox = (e) => {
    const value = e.target.checked ? e.target.value : '';
    const name = e.target.name;
    dispatch(filterProducts({ name, value, checked: e.target.checked }));
  };
  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key='question'
          className='question'
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div>{question}</motion.div>
          <motion.div
            initial={{ rotateZ: 0, transformOrigin: 'center' }}
            animate={{
              rotateZ: isOpen ? 0 : 180,
              transformOrigin: 'center center',
              transition: {
                duration: 0.5,
              },
            }}
            className='caret'
          >
            <PiCaretDown />
          </motion.div>
        </motion.div>
        {isOpen &&
          answer.map((i, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className='answer'
            >
              <input
                type='checkbox'
                name={question}
                onChange={handleCheckbox}
                value={i}
              />
              {stars &&
                Array.from({ length: 5 }).map((_, starIndex) =>
                  // Render your star component here, adjust styling as needed
                  starIndex < i ? (
                    <span key={starIndex}>
                      <IoIosStar color='gold' />
                    </span>
                  ) : (
                    <span key={starIndex}>
                      <IoIosStarOutline color='gold' />
                    </span>
                  )
                )}
              {!stars && <p key={index}>{i}</p>}
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
