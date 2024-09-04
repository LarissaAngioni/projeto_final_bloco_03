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
      <div className="ml-auto">
        <ul
          className="
            justify-end
            inline-flex
            gap-5
            pr-10
            m-5
          "
        >
          <li className="hover:underline">
            <Link to="/categorias">Categorias</Link>
          </li>
          <li className="hover:underline">
            <Link to="/cadastrarcategoria">Cadastrar Categorias</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
