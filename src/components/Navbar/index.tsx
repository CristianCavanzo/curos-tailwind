import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
	const handleDark = () => {
		const html = document.querySelector('html');
		const hasDark = html.classList.contains('dark');
		console.log(hasDark);
		if (!hasDark) {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	};
	return (
		<div className="fixed left-0 right-0 top-0 z-10 hidden h-14 items-center justify-around bg-white p-4 text-principal shadow-lg dark:bg-gray-800 dark:text-white lg:flex">
			<div className="h-auto">
				<p className="text-xl ">Platzi Travel</p>
			</div>
			<div className="text-md flex gap-x-8 font-bold">
				<a href="#home">Home</a>
				<a href="#recomendados">Recomendados</a>
				<a href="#rendas">Rentas</a>
				<a href="#home">FAQs</a>
				<a href="#home">Sobre nosotros</a>
			</div>
			<div className="flex gap-x-8">
				<FontAwesomeIcon icon={faSearch} size="xl" className="cursor-pointer fill-current" />
				<FontAwesomeIcon
					icon={faMoon}
					onClick={handleDark}
					size="xl"
					className="cursor-pointer fill-current"
				/>
				<FontAwesomeIcon
					icon={faUser}
					size="xl"
					className="cursor-pointer fill-current text-gray-300"
				/>
			</div>
		</div>
	);
};

export { NavBar };
