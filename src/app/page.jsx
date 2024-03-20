import Image from 'next/image';

const AboutPage = () => {
	return (
		<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24'>
			{/* IMAGE CONTAINER */}
			<div className='h-1/2 lg:w-1/2 lg:h-full relative'>
				<Image src='/hero.png' alt='' fill className='object-contain' />
			</div>
			{/* TEXT CONTAINER */}
			<div className='h-1/2 lg:w-1/2 lg:h-full flex flex-col gap-8 items-center justify-center'>
				{/* TITLE */}
				<div className='text-4xl font-bold'>
					First ever project creation experience
				</div>
				{/* DESCRIPTION */}
				<div className='text-2xl'>
					Project created with nextJs and ReactJs, connected to other
					full stack projects
				</div>
				{/* BUTTONS */}
				<div className='w-full flex gap-4'>
					<button className='rounded-lg p-4 ring-1 ring-black bg-black text-white'>
						Contact Me!
					</button>
					<button className='rounded-lg p-4 ring-1 ring-black'>
						Learn more
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
