import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="flex bg-red-600
      text-white"
    >
      <div
        className="
          pl-10
          font-bold
          text-2xl
          m-5
        "
      >
        <Link to="/home">FarMelhor</Link>
      </div>
    </div>
  );
}

export default Navbar;