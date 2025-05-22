import { Link } from "react-scroll";

export const Navbar = () => {
    return (
    <nav className="border border-white  text-white px-4 py-4 flex justify-center space-x-8 sticky top-0  z-50 shadow">
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Projects</Link>
      <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Skills</Link>
      <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Contact</Link>
    </nav>
    );
};