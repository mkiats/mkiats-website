'use client';

import Brain from '@/ui/aboutPage/cogWheelAnimation';
import EducationBlock from '@/ui/aboutPage/educationBlock/educationBlock';
import SummaryBlock from '@/ui/aboutPage/summaryBlock/summaryBlock';
import Timeline from '@/ui/aboutPage/workExperienceBlock/timeline';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const AboutPage = () => {
	const containerRef = useRef();
	const { scrollYProgress } = useScroll({ container: containerRef });
	return (
		<div className='h-full overflow-y-scroll flex' ref={containerRef}>
			<div className='w-full md:w-3/4 lg:w-2/3 xl:w-5/8 gap-24 md:gap-32 lg:gap-48 xl:gap-64 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24'>
				{/* TEXT CONTAINER */}
				<div className='justify-center flex flex-col '>
					{/* SUMMARY CONTAINER */}
					<SummaryBlock />
					{/* EXPERIENCE CONTAINER */}
					<div className=''>
						<Timeline />
					</div>
					{/* EDUCATION CONTAINER */}
					<div className='flex flex-col justify-center items-center'>
						<EducationBlock />
					</div>
				</div>
			</div>
			{/* SVG CONTAINER */}
			<div className='hidden md:w-1/4 md:block sticky top-0 z-10 lg:w-1/3 xl:w-3/8'>
				<Brain scrollYProgress={scrollYProgress} />
			</div>
		</div>
	);
};

export default AboutPage;
