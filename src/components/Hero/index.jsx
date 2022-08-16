import React, { useState } from 'react';

import styles from './Hero.module.scss';

const title = [
  {
    letter: 'P',
    url: '#',
  },
  {
    letter: 'R',
    url: '#',
  },
  {
    letter: 'I',
    url: '#',
  },
  {
    letter: 'D',
    url: '#',
  },
  {
    letter: 'E',
    url: '#',
  },
];

const Hero = () => {
  const [letterHover, setLetterHover] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.overlay}></div>

      <div className={styles.logo}>
        <b>
          {title.map((item, index) => {
            return (
              <a
                onMouseEnter={() => setLetterHover(true)}
                onMouseLeave={() => setLetterHover(false)}
                href={item.url}
                className={index === 0 && !letterHover && styles.blinking}
              >
                {item.letter}
              </a>
            );
          })}
          {/* <span className={styles.blinking}>P</span>RIDE */}
        </b>
      </div>
    </div>
  );
};

export default Hero;
