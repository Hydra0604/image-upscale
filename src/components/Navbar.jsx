import { useUser } from '@clerk/clerk-react';
import { SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ onUploadClick }) {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 text-lg font-bold hover:text-blue-600">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" />
                </svg>
                ImageEnhance
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link to="/pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link to="/support" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
              Support
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button 
              className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 cursor-pointer"
              onClick={onUploadClick}
            >
              Upload
            </button>
            {user ? (
              <div className="ml-3 relative">
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <SignInButton className="ml-3 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 hover:text-gray-900 cursor-pointer" />
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <svg className="block h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/features" onClick={handleCloseMenu} className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Features
            </Link>
            <Link to="/pricing" onClick={handleCloseMenu} className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Pricing
            </Link>
            <Link to="/support" onClick={handleCloseMenu} className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Support
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button 
                className="w-full flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={onUploadClick}
              >
                Upload
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              {user ? (
                <div className="px-3">
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="px-3">
                  <SignInButton className="w-full flex justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-900 cursor-pointer" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
