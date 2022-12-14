import { Link } from "react-router-dom";

function Header() {
  return (
    <h1>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
    </h1>
  );
}

export default Header;
