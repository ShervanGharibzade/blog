import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-300  w-full p-4 flex">
      <h1 className="flex-1 drop-shadow-lg">Redux Blog</h1>
      <nav>
        <ul className="flex drop-shadow-lg gap-5 pt-5 w-full">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Add Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
