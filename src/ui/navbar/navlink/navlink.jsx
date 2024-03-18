import Link from "next/link";

const Navlink = (link) => {
     return <div> 
        <Link href={link.url}>
            {link.title}
        </Link>       
         </div>
};

export default Navlink