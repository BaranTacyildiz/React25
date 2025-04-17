import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ToDoS</h1>
      <div className="tuslar">
        <Link to="/">Home</Link>
        <Link to="/create">New ToDo</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;