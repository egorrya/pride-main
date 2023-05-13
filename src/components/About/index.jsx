import { motion } from 'framer-motion';
import React, { useState } from 'react';

import styles from './About.module.scss';

const About = ({
	id,
	letter,
	title,
	description,
	buttonLink,
	buttonText,
	backgroundImage,
}) => {
	const [isButtonHover, setIsButtonHover] = useState(false);

	return (
		<section id={id} className={styles.root}>
			<div className='px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[50rem]'>
					<div className='relative z-10 lg:py-16'>
						<div className='flex justify-center items-center relative h-96 sm:h-160 lg:h-full bg-fixed  bg-top rounded-t-3xl lg:rounded-3xl'>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{
									duration: 1.2,
									delay: 0.3,
								}}
								className={styles.letter}
							>
								{letter}
							</motion.div>
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: 0.9,
							delay: 0.5,
						}}
						className='relative flex items-center bg-zinc-900 overflow-hidden'
						style={{ borderRadius: '10%' }}
					>
						{isButtonHover && (
							<motion.div
								className='absolute inset-0'
								initial={{ opacity: 0, scale: 1 }}
								animate={{ opacity: 1, scale: 1.2 }}
								exit={{ opacity: 0, scale: 1 }}
								transition={{
									duration: 1.5,
								}}
							>
								<div
									className='absolute inset-0'
									style={{
										backgroundImage:
											'linear-gradient(45deg, rgba(17, 24, 39, .9)  15%, rgba(17, 24, 39, 0.5) 100%)',
									}}
								></div>

								<img
									src={backgroundImage}
									alt='img'
									className='object-cover w-full h-full'
								/>
							</motion.div>
						)}

						<div className='p-24 lg:p-24'>
							<motion.h2
								initial={{ opacity: 0, y: '10px' }}
								whileInView={{ opacity: 1, y: '0' }}
								transition={{
									duration: 0.9,
									delay: 0.6,
								}}
								className='text-6xl font-bold mb-10 leading-tight	'
							>
								{title}
							</motion.h2>

							<motion.p
								initial={{ opacity: 0, y: '10px' }}
								whileInView={{ opacity: 1, y: '0' }}
								transition={{
									duration: 0.9,
									delay: 0.9,
								}}
								className='mt-4 text-gray-400 leading-relaxed'
							>
								{description}
							</motion.p>

							<motion.a
								initial={{ opacity: 0, y: '10px' }}
								whileInView={{ opacity: 1, y: '0' }}
								transition={{
									duration: 0.6,
									delay: 0.9,
								}}
								className='button mt-10 text-1xl'
								href={buttonLink}
								onMouseEnter={() => setIsButtonHover(true)}
								onMouseLeave={() => setIsButtonHover(false)}
							>
								{buttonText}
							</motion.a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
