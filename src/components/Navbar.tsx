import { useState } from 'react';
import { Menu, X, Laptop } from 'lucide-react';
import SignupModal from '../features/auth/SignupModal';
import useModal from '../hooks/useModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const signupModal = useModal();

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Laptop className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">QuickRent</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#gadgets" className="text-gray-600 hover:text-gray-900">Gadgets</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              <button 
                onClick={signupModal.open}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
              <a href="#gadgets" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Gadgets</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
              <button 
                onClick={signupModal.open}
                className="w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      <SignupModal isOpen={signupModal.isOpen} onClose={signupModal.close} />
    </>
  );
}