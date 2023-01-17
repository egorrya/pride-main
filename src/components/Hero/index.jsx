import React, { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import useScrollPosition from '../../hooks/useScrollPosition';
import { getElementPosition } from '../../utils/getElementPosition';
import kleverLogo from './../../assets/images/klever.png';
import styles from './Hero.module.scss';

const title = [
  {
    letter: 'P',
    url: '#',
  },
  {
    letter: 'R',
    url: '#about',
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

const Hero = ({ pageTitle, pageDescription, pageLink }) => {
  const isMounted = useRef(false);

  const [letterHover, setLetterHover] = useState(false);
  const lettersRef = useRef(null);
  const goalBlockRef = useRef(null);
  const [distance, setDistance] = useState(null);

  const positionY = useScrollPosition();

  useEffect(() => {
    if (isMounted) {
      const firstLetterPos = getElementPosition(lettersRef.current.children[0]);
      const goalBlockPos = getElementPosition(goalBlockRef.current);

      setDistance({
        top: goalBlockPos.top - firstLetterPos.top,
        left: goalBlockPos.left - firstLetterPos.left,
      });
    } else {
      window.scrollTo(0, 0);

      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  const styleLetter = () => {
    if (positionY === 0)
      return {
        scale: 1,
      };
    if (positionY < distance.top)
      return {
        translateY: positionY,
        translateX: distance.left / (distance.top / positionY),
        scale: 0.5 / (distance.top / positionY) + 1,
      };
    if (positionY >= distance.top)
      return {
        translateY: distance.top,
        translateX: distance.left,
        scale: 1.5,
      };
  };

  const classLetter = (index) => {
    if (index === 0) {
      if (positionY === 0) return '';
      if (positionY < distance.top) return styles.scrolling;
      if (positionY >= distance.top) return styles.scrolled;
    }

    if (index === 4 && !letterHover && positionY === 0) return styles.blinking;
  };

  return (
    <div className={styles.hero}>
      <section className={styles.root}>
        <motion.img
          initial={{ opacity: 0, y: '-10px' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{
            duration: 0.9,
            delay: 2,
          }}
          alt='logo'
          className={styles.kleverLogo}
          src={kleverLogo}
        />
        <div className={styles.overlay}></div>

        <div className={styles.logo}>
          <b ref={lettersRef}>
            {title.map((item, index) => {
              return (
                <motion.a
                  key={index}
                  onMouseEnter={() => setLetterHover(true)}
                  onMouseLeave={() => setLetterHover(false)}
                  href={item.url}
                  className={distance && classLetter(index)}
                  style={index === 0 && distance && styleLetter()}
                >
                  {item.letter}
                </motion.a>
              );
            })}
          </b>
        </div>
      </section>
      <section style={{ height: '95vh' }}>
        <div className='px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[50rem]'>
            <div className='relative z-10 lg:py-16'>
              <div
                className='flex justify-center items-center	 relative h-96 sm:h-160 lg:h-full bg-fixed  bg-top rounded-t-3xl lg:rounded-3xl'
                // style={{
                //   backgroundImage: `url("https://via.placeholder.com/500")`,
                // }}
              >
                <div
                  ref={goalBlockRef}
                  className={styles.inviseLetter}
                >
                  P
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
              }}
              className='relative flex items-center	 bg-zinc-900 rounded-3xl lg:rounded-bl-none lg:rounded-tl-none lg:rounded-r-3xl'
            >
              <span className='hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-zinc-900	lg:block lg:-left-16 lg:rounded-l-3xl'></span>

              <div className='p-24 lg:p-24'>
                <motion.h2
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0' }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6,
                  }}
                  className='text-6xl font-bold mb-10'
                >
                  {pageTitle}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0' }}
                  transition={{
                    duration: 0.9,
                    delay: 0.9,
                  }}
                  className='mt-4 text-gray-300'
                >
                  {pageDescription}
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                  }}
                  className='button mt-10'
                  href={pageLink}
                >
                  Перейти
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
