import Image from 'next/image';
import React, { Fragment } from 'react';
import SanFrancisco from '@img/sanFrancisco.jpg';
import Norway from '@img/norway.jpg';
import NewYork from '@img/new_york.jpg';
import Yosemite from '@img/yosemite.jpg';
import Seattle from '@img/seattle.jpg';
import Switzerland from '@img/switzerland.jpg';
import { Recomendaciones } from '../components/Recomendaciones';
import { RecomendacionesSection } from '../components/RecomendacionesSection';
import { Layout } from '../Layout';
import { Trending } from '../components/Trending/Trending';
import { FAQS } from '../components/FAQS/FAQS';
import { Footer } from '../components/Footer';
import { TabBar } from '../components/TabBar';
import { NavBar } from '../components/Navbar';

const Home = () => {
	return (
		<Fragment>
			<nav></nav>
			<NavBar />
			<main
				id="home"
				className="lg:max-h-content h-[90vh] max-h-[600px] w-screen lg:mt-14 lg:h-3/4"
			>
				<div className="w-100  lg:max-h-3/4 h-[90vh] max-h-[600px]">
					<div className="w-100 relative h-[90vh] max-h-[600px]  lg:h-full">
						<Image fill={true} quality="100" src={SanFrancisco} alt={''} className="object-cover" />
						<div className="z-2 column absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-between p-8 pb-16 pt-16 lg:items-start lg:justify-start lg:space-y-4 lg:p-16 lg:pt-20">
							<input
								className="w-full rounded-full bg-white p-2 text-center shadow-sm transition duration-300 focus-within:shadow-xl focus:w-11/12 focus:ring-2 focus:ring-primary lg:hidden"
								type="search"
								name=""
								id=""
								placeholder="Destino"
							/>
							<h2 className="hidden text-4xl font-bold lg:block">
								Find More Locations <br /> like this
							</h2>
							<button className="w-fit transform rounded-full bg-white p-2 pl-8 pr-8 text-center font-semibold text-principal shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-principal hover:text-white ">
								Explore More
							</button>
						</div>
					</div>
				</div>
			</main>
			<Layout>
				<RecomendacionesSection title="Nuestra recomendación">
					<Recomendaciones
						title={'Norway'}
						description={'Beautiful landscapes'}
						image={Norway}
						color="bg-principal dark:bg-gray-700"
					></Recomendaciones>

					<Recomendaciones
						title={'New York'}
						description={'Concrete jungle'}
						image={NewYork}
						color="bg-white dark:bg-gray-900"
					></Recomendaciones>

					<Recomendaciones
						title={'Yosemite'}
						description={'A break from the world'}
						image={Yosemite}
						color="bg-principal dark:bg-gray-700"
					></Recomendaciones>

					<Recomendaciones
						title={'Seattle'}
						description={'Big City'}
						image={Seattle}
						color="bg-white dark:bg-gray-900"
					></Recomendaciones>
					<Recomendaciones
						title={'Switzerland'}
						description={'Big City'}
						image={Switzerland}
						color="bg-principal dark:bg-gray-700"
					></Recomendaciones>
				</RecomendacionesSection>
				<Trending />
				<FAQS></FAQS>
			</Layout>
			<Footer />
			<TabBar />
		</Fragment>
	);
};

export default Home;
