import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-sm bg-white dark:bg-gray-900 sticky top-0 z-50">
      <nav className="max-w-7xl h-12 mx-auto px-5 py-5 flex justify-between items-center">
        
        <a href="#" className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          MyBrand
        </a>

        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>

        <button className="hidden md:block px-5 w-24 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Login
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-300"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-5 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 font-medium pt-3">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
          </ul>

          <button className="mt-4 w-full px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
