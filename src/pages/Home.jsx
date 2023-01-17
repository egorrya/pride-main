import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';

import data from '../data.json';

const Home = () => {
  return (
    <>
      <Hero
        pageTitle={data.firstPageTitle}
        pageDescription={data.firstPageDescription}
        pageLink={data.firstPageLink}
      />
      <About
        pageLetter={data.secondPageLetter}
        pageTitle={data.secondPageTitle}
        pageDescription={data.secondPageDescription}
        pageLink={data.secondPageLink}
      />
    </>
  );
};

export default Home;
