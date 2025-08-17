import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  return (
    <nav className="bg-white text-black p-3">
      <div className="flex justify-between items-center mx-auto container shadow-sm">
      <ul className="flex space-x-6">
        <div>
          FitGirlsTracker
        </div>
        <li>
          <Link to="/" className="hover:bg-gray">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experts</li>">Experts</Link>
        </li>
        {/* Add Dashboard later conditionally */}
        {isDashboard && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )
      }
      </ul>
      </div>
    </nav>
  )
}

export default Navbar;