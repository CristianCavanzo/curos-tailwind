import React, { Fragment } from 'react';
import { Title } from './Title';

const RecomendacionesSection = ({ children, title }) => {
	return (
		<Fragment>
			<Title>{title}</Title>
			<section className="flex w-auto items-center space-x-4 overflow-x-auto overflow-y-visible overscroll-x-contain pb-4 pt-4">
				{children}
			</section>
		</Fragment>
	);
};

export { RecomendacionesSection };
