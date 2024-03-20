'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import Navlink from './navlink/navlink';

const links = [
	{ url: '/', title: 'home' },
	{ url: '/about', title: 'about' },
	{ url: '/projects', title: 'projects' },
	{ url: '/contact', title: 'contact' },
];
const socials = [
	{ url: '/', title: 'github', src: '/github.png' },
	{ url: '/', title: 'linkedIn', src: '/linkedIn.png' },
	{ url: '/', title: 'facebook', src: '/facebook.png' },
	{ url: '/', title: 'instagram', src: '/instagram.png' },
];
const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24'>
			{/* LINKS */}
			<div className='hidden md:flex justify-center items-center gap-4 w-1/3'>
				{links.map((link) => (
					<Navlink link={link} key={link.title} />
				))}
			</div>
			{/* LOGO */}
			<div className='md:hidden lg:flex justify-center xl:w-1/3'>
				<Link
					href='/'
					className='text-sm bg-black rounded-lg p-2 flex font-semibold justify-center items-center'>
					<span className='text-white mr-1'>mkiats</span>
					<span className='w-12 h-8 bg-white rounded-lg flex items-center justify-center '>
						.dev
					</span>
				</Link>
			</div>
			{/* SOCIALS */}
			<div className='hidden md:flex gap-4 justify-center w-1/3'>
				{socials.map((link) => (
					<Link href={link.url} key={link.title}>
						<Image
							src={link.src}
							width={24}
							height={24}
							alt='Image_Description'
						/>
					</Link>
				))}
			</div>

			{/* MENU BUTTON */}
			<div className='md:hidden'>
				<button
					className='z-10 relative'
					onClick={() => setOpen(!open)}>
					<MdOutlineMenu color={open ? 'white' : 'black'} />
				</button>
				{/* MENU */}

				{open && (
					<div className='absolute top-0 right-0 h-screen w-screen bg-black text-white flex flex-col justify-center items-center gap-10'>
						{links.map((link) => (
							<Link href={link.url} key={link.title}>
								{link.title}
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
