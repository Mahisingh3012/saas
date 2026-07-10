import Image from "next/image";
import Link from "next/link"; // <-- Add this
import NavItems from "./Navitems";


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/images/logo.svg" 
          alt="logo"
          width={40}
          height={40} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
      <NavItems/>
      <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
