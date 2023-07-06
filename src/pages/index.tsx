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

const Home = () => {
	return (
		<Fragment>
			<nav></nav>
			<div id="tabBar"></div>
			<main id='home' className="h-[90vh] max-h-[600px] w-screen">
				<div className="w-100 h-[90vh] max-h-[600px]">
					<div className="w-100 relative h-[90vh] max-h-[600px]">
						<Image
							fill={true}
							style={{ objectFit: 'cover' }}
							quality="100"
							src={SanFrancisco}
							alt={''}
							className="object-cover "
						/>
						<div className="z-2 column absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-between p-8 pb-16 pt-16">
							<input
								className="w-full rounded-full bg-white p-2 text-center shadow-sm transition duration-300 focus-within:shadow-xl focus:w-11/12 focus:ring-2 focus:ring-primary "
								type="search"
								name=""
								id=""
								placeholder="Destino"
							/>
							<button className="w-fit transform rounded-full bg-white p-2 pl-8 pr-8 text-center font-semibold text-principal shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-principal hover:text-white">
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
						color="bg-principal"
					></Recomendaciones>

					<Recomendaciones
						title={'New York'}
						description={'Concrete jungle'}
						image={NewYork}
						color="bg-white"
					></Recomendaciones>

					<Recomendaciones
						title={'Yosemite'}
						description={'A break from the world'}
						image={Yosemite}
						color="bg-principal"
					></Recomendaciones>

					<Recomendaciones
						title={'Seattle'}
						description={'Big City'}
						image={Seattle}
						color="bg-white"
					></Recomendaciones>
					<Recomendaciones
						title={'Switzerland'}
						description={'Big City'}
						image={Switzerland}
						color="bg-principal"
					></Recomendaciones>
				</RecomendacionesSection>
				<Trending />
				<FAQS></FAQS>
				<Footer />
			</Layout>
			<TabBar />
		</Fragment>
	);
};

export default Home;
