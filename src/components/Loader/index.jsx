import { motion } from 'framer-motion';
import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div>
      <motion.div
        key='left'
        initial={{ x: '0' }}
        exit={{ x: '-50vw' }}
        transition={{
          duration: 1,
          // delay: 0.5,
          ease: 'easeInOut',
        }}
        className={styles.left}
      ></motion.div>
      <motion.div
        key='right'
        initial={{ x: '0' }}
        exit={{ x: '50vw' }}
        transition={{
          duration: 1,
          // delay: 0.5,
          ease: 'easeInOut',
        }}
        className={styles.right}
      ></motion.div>
    </div>
  );
};

export default Loader;
