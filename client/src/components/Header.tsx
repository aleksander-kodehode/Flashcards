import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" flex flex-row justify-between items-center w-full h-16 bg-gray-700 text-white p-2 ">
      <div>logo</div>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div>
        <button>Dark</button>
      </div>
    </nav>
  );
};

export default Header;
