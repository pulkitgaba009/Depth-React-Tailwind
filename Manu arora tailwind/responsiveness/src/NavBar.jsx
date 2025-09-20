import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-100 shadow-md w-[90vw]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-amber-900">
            MyBrand
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-amber-900 hover:text-amber-700">Home</a>
            <a href="#" className="text-amber-900 hover:text-amber-700">About</a>
            <a href="#" className="text-amber-900 hover:text-amber-700">Services</a>
            <a href="#" className="text-amber-900 hover:text-amber-700">Contact</a>
          </div>

          {/* Hamburger Button (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 hover:text-amber-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-amber-900 hover:text-amber-700">Home</a>
          <a href="#" className="block text-amber-900 hover:text-amber-700">About</a>
          <a href="#" className="block text-amber-900 hover:text-amber-700">Services</a>
          <a href="#" className="block text-amber-900 hover:text-amber-700">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
