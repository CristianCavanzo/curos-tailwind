import React, { Fragment } from 'react';
import { Card } from './Card/Card';
import { Title } from '../Title';
const Trending = () => {
	return (
		<Fragment>
			<Title>Trending Stays</Title>
			<div className="grid gap-y-4 lg:grid-cols-2 lg:gap-4 ">
				<Card
					title={'Chicago'}
					description={'2 rooms, bathroom and kitchen.'}
					image="bg-chicago"
					extraClass="lg:col-span-full lg:bg-start lg:min-h-[640px]"
				/>
				<Card
					title={'Los Angeles'}
					description={'4 rooms, 3 bathrooms,  kitchen and private pool.'}
					image="bg-LA"
					extraClass="lg:row-end-4 lg:row-start-2"
				/>
				<Card
					title={'Miami'}
					description={'3 rooms, 2 bathrooms,  kitchen and amazing sea view.'}
					image="bg-miami"
					extraClass="lg:min-h-[500px]"
				/>
				<Card
					title={'Bali'}
					description={'2 rooms, 2 bathrooms,  kitchen and private pool.'}
					image="bg-bali"
					extraClass="lg:min-h-[500px]"
				/>
			</div>
		</Fragment>
	);
};

export { Trending };
