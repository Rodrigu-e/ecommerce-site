import React from 'react';

import { Hero } from '@components/Hero/Hero';
import { Card } from '@components/Card/Card';

const HomePage = () => {
	return (
		<>
			<Hero />
			<h2 className='text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
				Our Products
			</h2>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap -m-4'>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</section>
		</>
	);
};

export { HomePage };
