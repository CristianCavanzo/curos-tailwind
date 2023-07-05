import Image from 'next/image';
import React from 'react';

const Recomendaciones = ({ title, description, image, color }) => {
	const textColor = (color === 'bg-white' && 'text-tertiary') || 'text-white';
	return (
		<div className="Card">
			<div>
				<Image
					quality="100"
					src={image}
					alt={''}
					width={256}
					height={200}
					className="h-[200px] rounded-t-lg object-cover"
				/>
			</div>
			<div
				className={`flex flex-col rounded-b-lg ${color} pb-8 pl-5 pr-5 pt-3 text-start ${textColor}`}
			>
				<p className="font-bold capitalize">{title}</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export { Recomendaciones };
