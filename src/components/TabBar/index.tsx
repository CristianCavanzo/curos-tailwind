import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const TabBar = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 flex h-16 w-full items-center justify-evenly bg-white shadow-md ">
			<a href="/#home">
				<FontAwesomeIcon icon={faHouse} size="xl" className="fill-current text-gray-400" />
			</a>
			<Link href="/">
				<FontAwesomeIcon icon={faSearch} size="xl" className=" fill-current text-gray-400" />
			</Link>
			<Link href="/">
				<FontAwesomeIcon icon={faHeart} size="xl" className=" fill-current text-gray-400" />
			</Link>
			<Link href="/">
				<FontAwesomeIcon icon={faUser} size="xl" className=" fill-current text-gray-400" />
			</Link>
		</div>
	);
};

export { TabBar };
