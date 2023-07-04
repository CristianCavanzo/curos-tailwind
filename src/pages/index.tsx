import Image from 'next/image';
import React, { Fragment } from 'react';
import SanFrancisco from '../public/img/sanFrancisco.jpg';
const Home = () => {
	return (
		<Fragment>
			<nav></nav>
			<div id="tabBar"></div>
			<main className="h-screen w-screen">
				<div className="w-100 h-3/4">
					<div className="relative h-full w-full">
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
								className="w-full rounded-full  bg-white p-2 text-center shadow-sm "
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
		</Fragment>
	);
};

export default Home;
