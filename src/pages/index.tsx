import Image from 'next/image';
import React, { Fragment } from 'react';
import SanFrancisco from '../public/img/sanFrancisco.jpg';
import Norway from '../public/img/norway.jpg';
import NewYork from '../public/img/new_york.jpg';
import Yosemite from '../public/img/yosemite.jpg';
import Seattle from '../public/img/seattle.jpg';
import Switzerland from '../public/img/switzerland.jpg';
import { Recomendaciones } from '../components/Recomendaciones';
import { RecomendacionesSection } from '../components/RecomendacionesSection';
import { Layout } from '../Layout';
import { Title } from '../components/Title';
const Home = () => {
	return (
		<Fragment>
			<nav></nav>
			<div id="tabBar"></div>
			<main className="h-[90vh] max-h-[600px] w-screen">
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
								className="w-full rounded-full bg-white p-2 text-center shadow-sm "
								type="search"
								name=""
								id=""
								placeholder="Destino"
							/>
							<button className="w-fit rounded-full bg-white p-2 pl-8 pr-8 text-center font-semibold text-principal shadow-sm">
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
			</Layout>
		</Fragment>
	);
};

export default Home;
