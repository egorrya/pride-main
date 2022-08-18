import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { motion, useScroll } from 'framer-motion';

import useScrollPosition from '../../hooks/useScrollPosition';
import { getElementPosition } from '../../utils/getElementPosition';
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
    console.log(0.4 / (distance.top / positionY) + 1);

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
            {/* <span className={styles.blinking}>P</span>RIDE */}
          </b>
        </div>
      </section>
      <section>
        <div className='px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[50rem]'>
            <div className='relative z-10 lg:py-16'>
              <div
                ref={goalBlockRef}
                className='relative h-96 sm:h-160 lg:h-full bg-fixed  bg-top rounded-t-3xl lg:rounded-3xl'
                // style={{
                //   backgroundImage: `url("https://via.placeholder.com/500")`,
                // }}
              ></div>
            </div>

            <div className='relative flex items-center bg-zinc-900 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl'>
              <span className='hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-zinc-900	lg:block lg:-left-16 lg:rounded-l-3xl'></span>

              <div className='p-24 lg:p-24'>
                <h2 className='text-5xl font-bold '>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore, debitis.
                </h2>

                <p className='mt-4 text-gray-300'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

                <a
                  className='inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring'
                  href='/contact'
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
