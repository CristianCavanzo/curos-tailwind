import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faHeart, faUser, faMoon } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const TabBar = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 flex h-16 w-full items-center justify-evenly bg-white shadow-2xl dark:bg-gray-800 dark:text-white lg:hidden ">
			<a href="/#home">
				<FontAwesomeIcon icon={faHouse} size="xl" className="fill-current text-gray-300" />
			</a>
			<Link href="/">
				<FontAwesomeIcon icon={faSearch} size="xl" className=" fill-current text-gray-300" />
			</Link>
			<Link href="/">
				<FontAwesomeIcon icon={faHeart} size="xl" className=" fill-current text-gray-300" />
			</Link>
			<Link href="/">
				<FontAwesomeIcon icon={faUser} size="xl" className=" fill-current text-gray-300" />
			</Link>
			<Link href="/">
				<FontAwesomeIcon icon={faMoon} size="xl" className=" fill-current text-gray-300" />
			</Link>
		</div>
	);
};

export { TabBar };
