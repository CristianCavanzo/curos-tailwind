import React from 'react';
import bali from '@img/bali.jpg';
const Card = ({ title, description, image }) => {
	return (
		<div className={` min-h-[420px] rounded-xl ${image} bg-cover p-8`}>
			<p className="text-2xl font-bold text-white">{title}</p>
			<p className="text-white">{description}</p>
		</div>
	);
};

export { Card };
