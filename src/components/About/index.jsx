import { motion } from 'framer-motion';
import React from 'react';

import styles from './About.module.scss';

const About = ({ backgroundImage, title, text, link, theme }) => {
  return (
    <section id='about' className={styles.root}>
      <div className='px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[50rem]'>
          <div className='relative z-10 lg:py-16'>
            <div
              className='flex justify-center items-center	 relative h-96 sm:h-160 lg:h-full bg-fixed  bg-top rounded-t-3xl lg:rounded-3xl'
              // style={{
              //   backgroundImage: `url("https://via.placeholder.com/500")`,
              // }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                }}
                className={styles.letter}
              >
                R
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            className='relative flex items-center bg-zinc-900 rounded-3xl lg:rounded-bl-none lg:rounded-tl-none lg:rounded-r-3xl'
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
                Название
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: '10px' }}
                whileInView={{ opacity: 1, y: '0' }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                }}
                className='button mt-10'
                href='/contact'
              >
                Перейти
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
