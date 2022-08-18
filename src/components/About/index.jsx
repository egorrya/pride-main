import React from 'react';

const About = ({ backgroundImage, title, text, link, theme }) => {
  return (
    <section>
      <div className='px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[50rem]'>
          <div className='relative z-10 lg:py-16'>
            <div
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
  );
};

export default About;
