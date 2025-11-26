import { Link, NavLink } from "react-router-dom";

const hoverEffect =
  "px-4 py-2 rounded-full text-sm font-medium bg-transparent text-base-content transition-colors duration-200 hover:bg-primary hover:text-white";

function Navbar() {
  return (
    <header className="bg-base-100 border-b">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Linker Block: Titel / Logo */}
        <Link to="/" className="px-4 text-xl font-semibold tracking-tight">
          Travel Agency
        </Link>

        {/* Rechter Block: Navigation */}
        <nav className="flex gap-1">
          <NavLink to="/" className={hoverEffect}>
            Home
          </NavLink>
          <NavLink to="/about" className={hoverEffect}>
            About
          </NavLink>
          <NavLink to="/destinations" className={hoverEffect}>
            Destinations
          </NavLink>
          <NavLink to="/contact" className={hoverEffect}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
