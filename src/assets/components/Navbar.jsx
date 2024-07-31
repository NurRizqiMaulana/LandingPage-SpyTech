import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-2xl">
                SpyTech
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center">
              <div className="flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  News
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-green-400 hover:bg-white hover:text-green-400 text-white font-bold py-2 px-4 rounded-md">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
