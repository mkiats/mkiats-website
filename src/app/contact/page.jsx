'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { items } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

const ContactPage = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({ target: ref });
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

	return (
		<div className='h-[90vh] w-full bg-yellow-300' ref={ref}>
			contactPage
		</div>
	);
};

export default ContactPage;
