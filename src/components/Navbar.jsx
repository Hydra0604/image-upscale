import { useUser } from '@clerk/clerk-react';
import { SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';
import { Link } from '../components/ScrollWrapper';
import { useState } from 'react';

export default function Navbar({ onUploadClick }) {
  const { user } = useUser();

  return (
    <nav className="flex items-center justify-between border-b px-10 py-4 bg-white shadow-sm w-full">
      <a href="/" className="flex items-center gap-3 text-lg font-bold hover:text-blue-600">
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 48 48" fill="currentColor">
          <path d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" />
        </svg>
        ImageEnhance
      </a>
      <div className="flex items-center gap-6">
        <a href="/features" className="text-sm text-gray-700 hover:text-blue-600">
          Features
        </a>
        <a href="/pricing" className="text-sm text-gray-700 hover:text-blue-600">
          Pricing
        </a>
        <a href="/support" className="text-sm text-gray-700 hover:text-blue-600">
          Support
        </a>
        <button 
          className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-lg text-sm font-bold hover:bg-blue-700"
          onClick={onUploadClick}
        >
          Upload
        </button>
        {user ? (
          <div className="relative">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <SignInButton className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 hover:text-gray-900" />
        )}
      </div>
    </nav>
  );
}
