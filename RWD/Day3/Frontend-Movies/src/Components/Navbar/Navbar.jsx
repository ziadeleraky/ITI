import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="m-auto">
        <Link className="navbar-brand" to="/movies">
          Home
        </Link>
        <Link className="navbar-brand" to="/movies/add">
          Add
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
