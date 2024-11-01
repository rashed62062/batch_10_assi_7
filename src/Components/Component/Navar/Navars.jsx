import navarImg from '../../../assets/logo.png';
import { CiDollar } from "react-icons/ci";

export default function Navars({ balance }) {
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between px-4 py-3 sm:px-8 bg-white shadow-md">
      {/* Logo */}
      <img src={navarImg} alt="Logo" className="w-16 h-16" />

      {/* Navigation Links */}
      <ul className="flex items-center gap-4 text-lg sm:text-xl">
        <li>
          <a href="#" className="hover:text-blue-500 transition duration-200" aria-label="Home">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition duration-200" aria-label="Fixture">Fixture</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition duration-200" aria-label="Teams">Teams</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition duration-200" aria-label="Schedules">Schedules</a>
        </li>

        {/* Balance Display */}
        <li className="bg-slate-200 text-black px-3 py-1 rounded-lg flex items-center">
          {balance} Coins <CiDollar className="ml-1" />
        </li>
      </ul>
    </div>
  );
}
