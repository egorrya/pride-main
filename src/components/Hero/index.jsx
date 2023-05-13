import React, { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { titleData } from '../../data';
import useScrollPosition from '../../hooks/useScrollPosition';
import { getElementPosition } from '../../utils/getElementPosition';
import styles from './Hero.module.scss';

const Hero = ({
	title,
	description,
	buttonLink,
	buttonText,
	backgroundImage,
}) => {
	const isMounted = useRef(false);

	const [letterHover, setLetterHover] = useState(false);
	const [isButtonHover, setIsButtonHover] = useState(false);
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
				<svg
					className={styles.svg}
					version='1.1'
					viewBox='0 0 512 512'
					width='512px'
					height='512px'
					xmlSpace='preserve'
				>
					<path d='M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z' />
				</svg>
				<div className={styles.overlay}></div>

				<div className={styles.logo}>
					<b ref={lettersRef}>
						{titleData.map((item, index) => {
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
			<section
				id={titleData[0].url.replace('#', '')}
				className={styles.aboutFirstSection}
			>
				<div className='px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[50rem]'>
						<div className='relative z-10 lg:py-16'>
							<div className='flex justify-center items-center	 relative h-96 sm:h-160 lg:h-full bg-fixed  bg-top rounded-t-3xl lg:rounded-3xl'>
								<div ref={goalBlockRef} className={styles.inviseLetter}>
									P
								</div>
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
										delay: 1,
									}}
									className='text-6xl font-bold mb-10'
								>
									{title}
								</motion.h2>

								<motion.p
									initial={{ opacity: 0, y: '10px' }}
									whileInView={{ opacity: 1, y: '0' }}
									transition={{
										duration: 0.9,
										delay: 1.5,
									}}
									className='mt-4 text-gray-400'
								>
									{description}
								</motion.p>

								<motion.a
									initial={{ opacity: 0, y: '10px' }}
									whileInView={{ opacity: 1, y: '0' }}
									transition={{
										duration: 0.6,
										delay: 2,
									}}
									className='button mt-10'
									onMouseEnter={() => setIsButtonHover(true)}
									onMouseLeave={() => setIsButtonHover(false)}
									href={buttonLink}
								>
									{buttonText}
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
