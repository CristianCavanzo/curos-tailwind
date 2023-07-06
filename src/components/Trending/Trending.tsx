import React, { Fragment } from 'react';
import { Card } from './Card/Card';
import { Title } from '../Title';
const Trending = () => {
	return (
		<Fragment>
			<Title>Trending Stays</Title>
			<div className="grid gap-y-4">
				<Card title={'Chicago'} description={'2 rooms, bathroom and kitchen.'} image="bg-chicago" />
				<Card
					title={'Los Angeles'}
					description={'4 rooms, 3 bathrooms,  kitchen and private pool.'}
					image="bg-LA"
				/>
				<Card
					title={'Miami'}
					description={'3 rooms, 2 bathrooms,  kitchen and amazing sea view.'}
					image="bg-miami"
				/>
				<Card
					title={'Bali'}
					description={'2 rooms, 2 bathrooms,  kitchen and private pool.'}
					image="bg-bali"
				/>
			</div>
		</Fragment>
	);
};

export { Trending };
