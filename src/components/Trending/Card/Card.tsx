import React, { FC, HTMLAttributes } from 'react';

interface Props {
	title: string;
	description: string;
	image: string;
	extraClass: string;
}

const Card: FC<Props> = ({ title, description, image, extraClass }) => {
	return (
		<div
			className={`min-h-[420px] rounded-xl ${image} bg-cover p-8 lg:bg-center ${extraClass} text-end`}
		>
			<p className="text-2xl font-bold text-white">{title}</p>
			<p className="text-white">{description}</p>
		</div>
	);
};

export { Card };
