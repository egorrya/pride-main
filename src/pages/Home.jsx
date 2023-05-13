import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';

import { aboutSectionsData, heroSectionData } from '../data';

const Home = () => {
	return (
		<>
			<Hero
				title={heroSectionData.title}
				description={heroSectionData.description}
				buttonLink={heroSectionData.buttonLink}
				buttonText={heroSectionData.buttonText}
				backgroundImage={heroSectionData.backgroundImage}
			/>
			{aboutSectionsData.map((section) => (
				<About
					key={section.id}
					id={section.id}
					letter={section.letter}
					title={section.title}
					description={section.description}
					buttonLink={section.buttonLink}
					buttonText={section.buttonText}
					backgroundImage={section.backgroundImage}
				/>
			))}
		</>
	);
};

export default Home;
