import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ link }) => {
	const pathname = usePathname();
	console.log(pathname);

	return (
		<Link
			className={`rounded-md p-1 ${
				link.url === pathname && 'bg-black text-white'
			}`}
			href={link.url}>
			{link.title}
		</Link>
	);
};

export default Navlink;
