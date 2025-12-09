const Header = () => {
  return (
    <header className="shadow-sm bg-white dark:bg-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-15 w-15 "
          />
          
        </a>

        <ul className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 font-medium">
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
