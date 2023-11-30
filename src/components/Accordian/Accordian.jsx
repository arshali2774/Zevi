import './Accordian.scss';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiCaretDown } from 'react-icons/pi';
const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);
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
                value={i}
              />
              <p key={index}>{i}</p>
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
